// 数学课程数据 — 占位（待 Python 批量生成）
var MATH_DATA = {
  name: '数学', icon: '📐', color: 'var(--math)',
  days: [
    {
      day: 1, title: '计算问题', topics: '混合运算·裂项法·等差数列',
      sections: [
        {
          type: '占位', topic: '数据生成中…', tagColor: '#3b82f6',
          content: '<p>数学课程数据正在通过 Python 脚本批量生成中。覆盖六大核心模块（计算、数论、应用题、工程、几何、排列组合），考试覆盖率达86%。</p>',
          problems: [
            { diff: 'basic', q: '1/2 + 0.5 =', opts: ['A. 0.5', 'B. 1', 'C. 1.5', 'D. 2'], ans: 1, exp: '1/2 = 0.5，所以 0.5 + 0.5 = 1。' }
          ]
        }
      ],
      quiz: [
        { topic: '测试', q: '0.25 + 3/4 =', opts: ['A. 0.5', 'B. 0.75', 'C. 1', 'D. 1.5'], ans: 2, exp: '0.25 + 0.75 = 1。' }
      ]
    }
  ]
};
