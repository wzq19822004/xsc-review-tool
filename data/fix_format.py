#!/usr/bin/env python3
"""
批量修复三科数据文件的格式问题：
1. Chinese: 竖线分隔列表 → <br>分隔、①...②...③... 换行
2. Math: 检查公式块是否在 formula-block 中
3. English: 检查表格是否使用 grammar-table class
"""

import re
import json
import sys
import os

# ========== 辅助函数 ==========

def fix_pipe_separated(content):
    """
    将 content 字符串中的竖线分隔列表转为 <br> 分隔。
    策略：在 HTML 内容（非标签内）中，将 | 替换为 <br>。
    特殊处理：跳过 <br> 标签（区分 <br> 和 <br/> 等变体）。
    """
    # 更稳健的方法：使用正则匹配标签外的竖线
    # 先替换已确认的 pattern：非标签内的 | 且前后有实际内容
    
    # Step 1: 替换「内容|内容」模式（无空格）
    content = re.sub(
        r'(?<=[^\s<>])\|(?=[^\s<>])',
        '<br>',
        content
    )
    
    # Step 2: 替换「内容 | 内容」模式（有空格）
    content = re.sub(
        r'(?<=[^\s<>])\s\|\s(?=[^\s<>])',
        ' <br>',
        content
    )
    
    # Step 3: 替换「内容 |内容」或「内容| 内容」模式
    content = re.sub(
        r'(?<=[^\s<>])\|\s(?=[^\s<>])',
        '<br>',
        content
    )
    content = re.sub(
        r'(?<=[^\s<>])\s\|(?=[^\s<>])',
        ' <br>',
        content
    )
    
    return content


def fix_numbered_list(content):
    """
    修复 ①...②...③... 格式：确保带圈数字前面有换行。
    对 ②-⑳ 前面如果没有 <br>、<p>、<li> 等标签，添加 <br>
    """
    # 匹配 ②-⑳（不包括①，因为①通常是第一个，不需要前加换行）
    # Unicode: ①=\u2460, ②=\u2461, ... ⑳=\u2473
    circled_nums = '②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳'
    
    # 在 ②-⑳ 前面添加 <br>，但前提是前面不是 <br>、<p>、<li>、>、换行等
    # 使用正则负向后顾
    for num in circled_nums:
        # 不在标签内，且前面不是 <br>、\n、>、空格开头的情况
        pattern = re.compile(r'(?<!<br>)(?<!<br />)(?<!<br/>)(?<!\n)(?<![>])\s*' + re.escape(num))
        content = pattern.sub(lambda m: '<br>' + m.group().lstrip(), content)
    
    return content


def fix_empty_pp(content):
    """
    修复 </p><p> 之间没有内容的问题。
    如果 </p><p> 之间为空（或只有空白），合并为一个 </p><p>
    实际上：删除空的 <p></p> 标签对
    """
    # 移除空的 <p></p>
    content = re.sub(r'<p>\s*</p>', '', content)
    # 合并连续的 </p><p> 
    # 这个可能太激进，先不做
    return content


def process_chinese_content(content):
    """处理语文数据 content 字段"""
    original = content
    
    # 1. 修复竖线分隔列表
    content = fix_pipe_separated(content)
    
    # 2. 修复带圈数字换行
    content = fix_numbered_list(content)
    
    # 3. 修复空段落
    content = fix_empty_pp(content)
    
    # 4. 额外：确保 ① 开头的段落前有适当分隔
    # 如果 ① 前面紧跟中文没有分隔，添加 <br>
    
    if content != original:
        return content
    return content


def extract_and_fix_chinese_js(filepath):
    """处理 chinese.js 文件"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 策略：逐行处理，找到 "content": "..." 的行
    lines = content.split('\n')
    fixed_lines = []
    fixed_count = 0
    
    for line in lines:
        # 匹配 "content": "..." 的行
        # 注意：content 可能跨行，但在此文件中每个 content 都在一行内
        match = re.match(r'^(\s*"content":\s*")(.*)(",\s*)$', line)
        if match:
            prefix = match.group(1)
            content_str = match.group(2)
            suffix = match.group(3)
            
            # 处理 content 字符串（已经 unescape 了引号）
            fixed_content = process_chinese_content(content_str)
            
            if fixed_content != content_str:
                fixed_count += 1
                new_line = prefix + fixed_content + suffix
                fixed_lines.append(new_line)
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    if fixed_count > 0:
        new_content = '\n'.join(fixed_lines)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ chinese.js: 修复了 {fixed_count} 个 content 字段")
    else:
        print(f"ℹ️  chinese.js: 无需修复")
    
    return fixed_count


def check_math_js(filepath):
    """检查 math.js 文件中的公式块"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有 <div class="formula 相关的内容
    formula_blocks = re.findall(r'<div class="formula[^>]*>', content)
    correct = sum(1 for fb in formula_blocks if 'formula-block' in fb)
    
    print(f"✅ math.js: 共 {len(formula_blocks)} 个公式块，{correct} 个使用 formula-block")
    
    # 检查是否有公式不在 formula-block 中
    # 查找可能裸露的公式（包含数学符号但没有被 div 包裹）
    # 这个检查比较难自动化，先做基本检查
    
    if len(formula_blocks) == correct:
        print("   ✅ 所有公式块都正确使用了 formula-block class")
    else:
        print(f"   ⚠️  有 {len(formula_blocks) - correct} 个公式块未使用 formula-block")
    
    return len(formula_blocks) - correct


def check_english_js(filepath):
    """检查 english.js 文件中的表格"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有 <table 标签
    tables = re.findall(r'<table[^>]*>', content)
    correct = sum(1 for t in tables if 'grammar-table' in t)
    
    print(f"✅ english.js: 共 {len(tables)} 个表格，{correct} 个使用 grammar-table")
    
    if len(tables) == correct:
        print("   ✅ 所有表格都正确使用了 grammar-table class")
    else:
        print(f"   ⚠️  有 {len(tables) - correct} 个表格未使用 grammar-table")
        # 找出问题表格
        for i, t in enumerate(tables):
            if 'grammar-table' not in t:
                # 找到上下文
                idx = content.find(t)
                context_start = max(0, idx - 50)
                context_end = min(len(content), idx + len(t) + 100)
                print(f"   问题表格 #{i+1}: ...{content[context_start:context_end]}...")
    
    return len(tables) - correct


def verify_js_syntax(filepath):
    """验证 JS 文件语法（使用 node --check）"""
    try:
        result = os.popen(f'node --check "{filepath}" 2>&1').read()
        if result:
            print(f"   ❌ 语法错误: {result.strip()}")
            return False
        else:
            print(f"   ✅ JS 语法验证通过")
            return True
    except Exception as e:
        print(f"   ⚠️  无法验证: {e}")
        return None


# ========== 主程序 ==========

BASE = '/Users/Gavin/WorkBuddy/小升初复习工具/data'

print("=" * 60)
print("开始批量修复数据文件格式问题...")
print("=" * 60)

# 1. 修复 Chinese 数据
print("\n📖 处理语文数据 (chinese.js)...")
fixed = extract_and_fix_chinese_js(os.path.join(BASE, 'chinese.js'))
verify_js_syntax(os.path.join(BASE, 'chinese.js'))

# 2. 检查 Math 数据
print("\n📐 检查数学数据 (math.js)...")
check_math_js(os.path.join(BASE, 'math.js'))

# 3. 检查 English 数据
print("\n🔤 检查英语数据 (english.js)...")
check_english_js(os.path.join(BASE, 'english.js'))

print("\n" + "=" * 60)
print("格式修复完成！")
print("=" * 60)
