// 语文课程数据 — 占位（待 Python 批量生成）
var CHINESE_DATA = {
  name: '语文', icon: '📖', color: 'var(--chinese)',
  days: [
    {
      day: 1, title: '基础入门', topics: '字音·《观沧海》·《论语》·概括',
      sections: [
        {
          type: '占位', topic: '数据生成中…', tagColor: '#f59e0b',
          content: '<p>语文课程数据正在通过 Python 脚本批量生成中。包含12天完整内容：基础运用、诗词鉴赏、文言文、阅读理解、作文、名著导读。</p>',
          problems: [
            { diff: 'basic', q: '以下哪项是语文学习的内容？', opts: ['A. 字音字形', 'B. 数学公式', 'C. 英语语法', 'D. 物理实验'], ans: 0, exp: '字音字形是语文基础运用板块的核心内容。' }
          ]
        }
      ],
      quiz: [
        { topic: '测试', q: '这是一道测试题，框架工作正常吗？', opts: ['A. 正常', 'B. 不正常', 'C. 不确定', 'D. 以上都对'], ans: 0, exp: '框架正常工作时选A。' }
      ]
    }
  ]
};
