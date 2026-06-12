#!/usr/bin/env python3
"""Build single-file distributable HTML from multi-file project."""
import re, os, sys
from pathlib import Path

ROOT = Path(__file__).parent
INDEX = ROOT / 'index.html'
DATA_DIR = ROOT / 'data'
OUTPUT = ROOT / 'dist' / '小升初复习工具.html'

def build():
    # Read index.html
    with open(INDEX, 'r', encoding='utf-8') as f:
        html = f.read()

    # Find all <script src="data/...js"> tags and replace with inline content
    def replace_script(match):
        src = match.group(2)
        filepath = ROOT / src
        if filepath.exists():
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            return f'<script>\n{content}\n</script>'
        else:
            print(f'⚠️  File not found: {filepath}')
            return match.group(0)

    html = re.sub(
        r'(<script\s+src=")(data/[^"]+\.js)("[^>]*>)',
        replace_script,
        html
    )

    # Write output
    OUTPUT.parent.mkdir(exist_ok=True)
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(html)

    size_kb = OUTPUT.stat().st_size / 1024
    print(f'✅ Built: {OUTPUT}')
    print(f'   Size: {size_kb:.0f} KB')
    print(f'   Open with browser to use — no server needed.')
    return OUTPUT

if __name__ == '__main__':
    build()
