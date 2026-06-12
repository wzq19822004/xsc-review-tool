// 英语课程数据 — 占位（待 Python 批量生成）
var ENGLISH_DATA = {
  name: '英语', icon: '🔤', color: 'var(--english)',
  days: [
    {
      day: 1, title: '六种动词时态', topics: '一般现在·过去·将来·进行·完成',
      sections: [
        {
          type: '占位', topic: '数据生成中…', tagColor: '#22c55e',
          content: '<p>英语课程数据正在通过 Python 脚本批量生成中。语法+阅读+写作+词汇四位一体，12天构建完整中考语法框架。</p>',
          problems: [
            { diff: 'basic', q: 'He often ___ to school.', opts: ['A. go', 'B. goes', 'C. went', 'D. going'], ans: 1, exp: 'often 表示一般现在时，主语 he 需要三单形式 goes。' }
          ]
        }
      ],
      quiz: [
        { topic: '测试', q: 'She ___ a teacher.', opts: ['A. am', 'B. is', 'C. are', 'D. be'], ans: 1, exp: '主语 she 用 is。' }
      ]
    }
  ]
};
