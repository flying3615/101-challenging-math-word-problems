(() => {
  const storageKey = 'mathStoryLanguage';
  const languages = ['en', 'zh-Hans'];
  let language = languages.includes(localStorage.getItem(storageKey)) ? localStorage.getItem(storageKey) : 'en';
  const banks = new Set();
  const text = {
    en: {
      language: 'Language', english: 'English', chinese: '中文', homeTitle: '101 Challenging Math Word Problems', practiceTitle: 'Math Story Lab · Book {{book}} Practice',
      collection: 'Practice collection', homeLead: 'Choose a book and begin its interactive practice library.', chooseBook: 'Choose a book',
      readyDescription: 'Interactive practice library with 101 problems.', bookDescription1: 'Addition, subtraction, multiplication, division and two-step problems.', bookDescription2: 'Four operations, measurement, fractions, money, time and volume.', bookDescription3: 'Whole-number operations, measurement, fractions, money, area and perimeter.', bookDescription4: 'Whole numbers, fractions, money, mass, area, perimeter and two-step problems.', bookDescription5: 'Operations, measurement, ratio, percentage, geometry and two-step problems.', bookDescription6: 'Whole-number operations, measurement, fractions, speed, ratio and percentage.', practiceReady: 'Practice ready', selected: 'Book {{book}} selected', detail: 'This book has the complete interactive learning library: visual models, hints, answer checks, topic selection, and progress tracking for all 101 questions.', interactiveAvailable: 'Interactive practice is available', startPractice: 'Start Book {{book}} practice', openPdf: 'Open original PDF', resources: 'Resources: resources/book-{{book}}/', footer: 'All six books include complete 101-question interactive practice libraries. The original PDFs remain available in Resources.', completed: '{{count}} of 101 questions completed',
      back: 'Back to all books', brandSub: 'Book {{book}} · 101 Challenge Library', parent: 'Parent snapshot', overview: 'Learning library overview', overviewStrong: 'Work through each problem step by step.', overviewLead: 'Read, choose a visual model, solve, then check.', problems: 'problems in the library', solvedProblems: 'problems solved', chooseTopic: 'Choose a topic', chooseTopicLead: 'Pick a number whenever you are ready. Green ticks mean you solved it.', topics: 'Topics', allProblems: 'All problems', problemPicker: 'Problem picker', loading: 'Loading the challenge library…',
      breadcrumb: '{{topic}} · Question {{id}} of {{total}}', lessonHeading: 'Let’s make a plan', pathRead: 'Read the story', pathPicture: 'Picture the relationship', pathWork: 'Work it out', pathCheck: 'Check', nextMove: 'YOUR NEXT MOVE', lessonTitle: 'Choose a visual model before calculating.', lessonLead: 'A good model turns the important numbers into equal groups, parts of a whole, a balance, or a shape.', showModel: 'Show a visual model', replayModel: 'Replay the model', showHint: 'Show a small hint', hideHint: 'Hide hint', hintPrefix: 'Hint:',
      working: 'Working space', workingNote: 'Scratch work stays on this device for this question.', openWorking: 'Open working space', hideWorking: 'Hide working space', clearWorking: 'Clear working', workingPlaceholder: 'Type calculations, notes, or an equation here.', workingAria: 'Working space for Question {{id}}', answer: 'Your answer', answerPlaceholder: 'Type your answer', answerAria: 'Your answer for Question {{id}}', checkAnswer: 'Check my answer', previous: '← Question {{id}}', next: 'Question {{id}} →', openQuestion: 'Open Question {{id}}',
      good: 'Great work! Your answer checks out. Can you explain how your model helped you?', notYet: 'Not quite yet. Try the visual model or one small hint, then check which number the question is asking for.', solvedToast: 'Question {{id}} solved!', modelToast: 'Watch how equal-sized parts make the relationship easier to see.',
      solutionHelp: 'Need more help?', solutionLead: 'Reveal 1 step at a time, then try the question yourself.', startGuidedSolution: 'Guide me step by step', nextSolutionStep: 'Show next step', showSolutionAnswer: 'Show answer and check', hideGuidedSolution: 'Hide solution', resumeGuidedSolution: 'Show solution again', tryIndependently: 'Try it again on my own', solutionStrategy: 'Plan', visualFirstMove: 'First relationship', solutionAnswer: 'Answer and check',
      thisPractice: 'This practice', close: 'Close', reportSolved: 'Solved', attempted: 'Attempted', hints: 'Hints used', parentAdvice1: 'Ask your child to explain the picture before they calculate.', parentAdvice2: 'For a difficult question, use one hint only, then let them try again.', parentAdvice3: 'The library remembers solved questions on this device.',
      storyMap: 'QUESTION {{id}} STORY MAP', storyMapTitle: 'Story map: {{title}}', answerVisualKicker: 'QUESTION {{id}} VISUAL MODEL', answerVisualTitle: 'Draw the relationship', keyValues: 'Key values from this question', noValues: 'Read the quantities in the story', whole: 'of 1 whole', equalParts: '{{count}} equal parts', findPart: 'Find the part or remainder the question asks for', moneyValue: 'Money value {{index}}', fromQuestion: 'from this question', nextStep: 'Next step', equalSets: 'equal sets', matchGroups: 'match each value to its group', knownMeasure: 'Known measure', find: 'Find', knownValue: 'Known value', compareWith: 'Compare with', target: 'Question target', given: 'given in the story', identify: 'Identify this relationship',
      modelBar: 'A change story', modelFraction: 'Parts of one whole', modelUnit: 'Equal groups or a ratio', modelMoney: 'Prices and equal sets', modelMass: 'Known and unknown measures', modelGeometry: 'Shape and measurement', modelRelationship: 'Story relationship',
      focusBar: 'Place the known values in order before finding what changes.', focusFraction: 'Keep the whole split into the fraction shown in this question.', focusUnit: 'Compare the values named in this story without changing their units.', focusMoney: 'Connect each equal group to the money information in the story.', focusMass: 'Put the known measure on one side and identify the missing measure.', focusGeometry: 'Mark the known side lengths before choosing a formula.', focusRelationship: 'Use only the information stated in the question.',
      topicAll: 'All',
      brandName: 'Math Story Lab',
      loadingMissing: 'The question bank could not be found.', loadingPreparing: 'The question library is being prepared…',
      mapCaption: 'This map uses the information in the question. Use the small hint if you need help choosing the next operation.',
      parts: '{{count}} parts', ratioLeft: 'first quantity', ratioRight: 'second quantity',
      sublineUnit: 'Each block is 1 equal part. Do not calculate the answer yet.',
      sublineMassLead: 'Use', sublineMassTail: 'to balance the relationship.',
      sublineGeometry: 'Measurements given in this question: {{values}}. Decide which part of the shape each measurement describes — some of them are a perimeter or an area, not a side.',
      sublineGeometryNone: 'Read the measurements from the question and mark them on the shape before choosing a formula.',
      sublineGeometryTail: 'This outline is only a reminder that the question is about a shape. It is not the shape in the question.',
      sublineGuess: 'Solve this one by listing and testing, not by drawing bars. Write out the numbers that fit 1 condition, then find which of them also fits the other.',
      modelGuess: 'A number to search for', focusGuess: 'List the numbers that fit 1 condition, then find which of them also fits the other.',
      numberInStory: 'Number in the story', testCondition: 'use it as a test condition',
    },
    'zh-Hans': {
      language: '语言', english: 'English', chinese: '中文', homeTitle: '101 道挑战数学应用题', practiceTitle: '数学故事实验室 · 第 {{book}} 册练习',
      collection: '练习合集', homeLead: '选择一本书，开始互动练习题库。', chooseBook: '选择一本书',
      readyDescription: '含 101 道题的互动练习题库。', bookDescription1: '加减乘除与两步应用题。', bookDescription2: '四则运算、长度和质量、分数、体积、钱币与时间。', bookDescription3: '整数四则运算、钱币、分数、测量、面积与周长。', bookDescription4: '整数、分数、钱币、质量、面积与周长，以及两步应用题。', bookDescription5: '四则运算、测量、比、百分数、几何与两步应用题。', bookDescription6: '整数四则运算、测量、分数、路程、速度与时间、比与百分数。', practiceReady: '练习已准备好', selected: '已选择第 {{book}} 册', detail: '本书提供完整的互动学习题库：针对题目的图示、提示、答案检查、主题选择，以及 101 道题的学习进度记录。', interactiveAvailable: '互动练习可用', startPractice: '开始第 {{book}} 册练习', openPdf: '打开原始 PDF', resources: '资源：resources/book-{{book}}/', footer: '6 本书均包含完整的 101 道互动练习题库。原始 PDF 保留在资源文件夹中。', completed: '已完成 {{count}} / 101 题',
      back: '返回全部书籍', brandSub: '第 {{book}} 册 · 101 道挑战题库', parent: '家长学习概览', overview: '学习题库概览', overviewStrong: '逐步完成每一道应用题。', overviewLead: '阅读题目、选择图示、计算，再检查答案。', problems: '题库中的题目', solvedProblems: '已完成题目', chooseTopic: '选择主题', chooseTopicLead: '准备好后可选择任何题号。绿色标记表示该题已完成。', topics: '主题', allProblems: '全部题目', problemPicker: '题目选择器', loading: '正在加载挑战题库…',
      breadcrumb: '{{topic}} · 第 {{id}} / {{total}} 题', lessonHeading: '一起制定解题计划', pathRead: '阅读题目', pathPicture: '理解数量关系', pathWork: '开始计算', pathCheck: '检查答案', nextMove: '下一步', lessonTitle: '计算前，先选择一种图示方法。', lessonLead: '好的图示能把关键数字表示成相等的组、整体的部分、天平关系或图形。', showModel: '显示图示', replayModel: '再次查看图示', showHint: '显示小提示', hideHint: '隐藏提示', hintPrefix: '提示：',
      working: '草稿区', workingNote: '这道题的草稿只保存在这台设备上。', openWorking: '打开草稿区', hideWorking: '收起草稿区', clearWorking: '清除草稿', workingPlaceholder: '在这里输入算式、笔记或方程。', workingAria: '第 {{id}} 题草稿区', answer: '你的答案', answerPlaceholder: '输入你的答案', answerAria: '第 {{id}} 题的答案', checkAnswer: '检查答案', previous: '← 第 {{id}} 题', next: '第 {{id}} 题 →', openQuestion: '打开第 {{id}} 题',
      good: '做得很好！你的答案正确。你能说说图示怎样帮助你解题吗？', notYet: '还差一点。试试图示或使用一个小提示，然后确认题目要求你求的是哪个数量。', solvedToast: '第 {{id}} 题已完成！', modelToast: '观察相等的部分怎样让数量关系更清楚。',
      solutionHelp: '需要更多帮助吗？', solutionLead: '一次显示 1 步，再自己尝试解题。', startGuidedSolution: '带我一步一步做', nextSolutionStep: '显示下一步', showSolutionAnswer: '显示答案与检查方法', hideGuidedSolution: '隐藏解题步骤', resumeGuidedSolution: '再次显示解题步骤', tryIndependently: '再自己试一次', solutionStrategy: '解题计划', visualFirstMove: '第一步的数量关系', solutionAnswer: '答案与检查方法',
      thisPractice: '本次练习', close: '关闭', reportSolved: '已完成', attempted: '已尝试', hints: '已用提示', parentAdvice1: '请孩子在计算前先解释图中的数量关系。', parentAdvice2: '遇到难题时，只使用一个提示，然后让孩子再试一次。', parentAdvice3: '题库会在这台设备上保存已完成的题目。',
      storyMap: '第 {{id}} 题数量关系图', storyMapTitle: '数量关系图：{{title}}', answerVisualKicker: '第 {{id}} 题图示模型', answerVisualTitle: '画出数量关系', keyValues: '本题的关键数量', noValues: '阅读题目中的数量', whole: '个整体', equalParts: '{{count}} 个相等部分', findPart: '找出题目要求的部分或余数', moneyValue: '金额 {{index}}', fromQuestion: '来自本题', nextStep: '下一步', equalSets: '相等的组', matchGroups: '把每个数值与题中的组对应起来', knownMeasure: '已知量', find: '求', knownValue: '已知数量', compareWith: '比较数量', target: '所求数量', given: '题目中已知', identify: '确定这个数量关系',
      modelBar: '增减数量关系', modelFraction: '一个整体的部分', modelUnit: '相等的组或比', modelMoney: '价格与相等的组', modelMass: '已知与未知的量', modelGeometry: '图形与测量', modelRelationship: '题目中的数量关系',
      focusBar: '按顺序放置已知数量，再找出发生变化的数量。', focusFraction: '把整体按题目中的分数分成相等部分。', focusUnit: '比较题目中提到的数量，并保持单位不变。', focusMoney: '把每个相等的组与题目中的金额信息对应起来。', focusMass: '把已知量放在一边，再找出缺少的量。', focusGeometry: '选择公式前，标出已知边长。', focusRelationship: '只使用题目中给出的信息。',
      topicAll: '全部',
      brandName: '数学故事实验室',
      loadingMissing: '找不到题库文件。', loadingPreparing: '题库正在准备中…',
      mapCaption: '这张图只用题目中给出的信息。如果不确定下一步用哪种运算，可以看看小提示。',
      parts: '{{count}} 份', ratioLeft: '第 1 个数量', ratioRight: '第 2 个数量',
      sublineUnit: '每一格都是 1 个相等的部分。先不要急着算出答案。',
      sublineMassLead: '用', sublineMassTail: '来平衡这个数量关系。',
      sublineGeometry: '本题给出的测量值：{{values}}。请判断每个数值对应图形的哪个部分 —— 其中有些是周长或面积，并不是边长。',
      sublineGeometryNone: '先从题目中读出各个测量值并标在图形上，再选择公式。',
      sublineGeometryTail: '这个轮廓只是提醒你本题与图形有关，它并不是题目中的那个图形。',
      sublineGuess: '这道题要用列举和检验来解，而不是画条形图。先写出满足其中 1 个条件的数，再看哪一个同时满足另一个条件。',
      modelGuess: '要找的那个数', focusGuess: '先列出满足其中 1 个条件的数，再找出同时满足另一个条件的那个。',
      numberInStory: '题目中的数字', testCondition: '把它当作一个检验条件',
    }
  };
  const topicText = {
    'Addition within 100':'100 以内加法','Subtraction within 100':'100 以内减法','Multiplication':'乘法','Division':'除法','Addition and Subtraction within 100':'100 以内加减法','Addition and Multiplication within 100':'加法和乘法','Addition and Division within 100':'加法和除法','Subtraction and Multiplication within 100':'减法和乘法','Subtraction and Division within 100':'减法和除法','Multiplication and Division within 100':'乘法和除法','2-part Word Problems':'两步应用题','Whole Numbers':'整数','Fractions':'分数','Decimals':'小数','Percentages':'百分数','Ratio':'比','Measurement':'测量','Geometry':'几何','Money':'钱币与金额','Time':'时间','Speed':'速度','Area and Perimeter':'面积和周长','Volume':'体积','Average':'平均数',
    // the six banks between them use 35 distinct topic strings; these are the
    // ones the original map missed, so they showed in English in the sidebar,
    // the topic pill and the breadcrumb even in Chinese
    'Area & Perimeter':'面积和周长','Length':'长度','Mass':'质量','Percentage':'百分数',
    'Four Operations':'四则运算','The Four Operations of Whole Numbers':'整数四则运算',
    'Length and Mass':'长度和质量','Distance, Speed and Time':'路程、速度与时间',
    '2-part Problems':'两步应用题','2-part: Area':'两步应用题：面积',
    '2-part: Four Operations':'两步应用题：四则运算','2-part: Measurement':'两步应用题：测量',
    '2-part: Percentage':'两步应用题：百分数','2-part: Ratio':'两步应用题：比',
    '2-part: The Four Operations of Whole Numbers':'两步应用题：整数四则运算'
  };
  const replace = (value, variables = {}) => String(value).replace(/{{(\w+)}}/g, (_, key) => variables[key] ?? '');
  const t = (key, variables) => replace((text[language] && text[language][key]) || text.en[key] || key, variables);
  const topic = value => language === 'zh-Hans' ? (topicText[value] || value) : value;
  const isChinese = () => language === 'zh-Hans';
  const setNodeText = (selector, value, root = document) => root.querySelectorAll(selector).forEach(node => { if (node.textContent !== value) node.textContent = value; });
  const setNodeHtml = (selector, value, root = document) => root.querySelectorAll(selector).forEach(node => { if (node.innerHTML !== value) node.innerHTML = value; });
  function prepareBank(bank) {
    if (!Array.isArray(bank)) return;
    banks.add(bank);
    bank.forEach(question => {
      question._englishQuestion ||= question.question;
      question._englishHint ||= question.hint || '';
      question.question = isChinese() ? (question.questionZh || question._englishQuestion) : question._englishQuestion;
      question.hint = isChinese() ? (question.hintZh || question._englishHint) : question._englishHint;
    });
  }
  function syncBanks() { banks.forEach(prepareBank); }
  function updateLanguageButtons(root = document) {
    root.querySelectorAll('[data-language]').forEach(button => {
      const active = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
    });
    document.documentElement.lang = language;
  }
  function bindLanguageButtons(root = document) {
    root.querySelectorAll('[data-language]').forEach(button => {
      if (button.dataset.languageBound) return;
      button.dataset.languageBound = 'true';
      button.addEventListener('click', () => setLanguage(button.dataset.language));
    });
    updateLanguageButtons(root);
  }
  function setLanguage(next) {
    if (!languages.includes(next) || next === language) return;
    language = next;
    localStorage.setItem(storageKey, language);
    syncBanks();
    window.dispatchEvent(new CustomEvent('mathstorylanguagechange', { detail: { language } }));
  }
  function applyPracticeChrome(book, bank) {
    document.title = t('practiceTitle', { book });
    setNodeText('.collection-back', t('back'));
    const brand = document.querySelector('.brand > div:nth-child(2)');
    if (brand) brand.innerHTML = `${t('brandName')}<small>${t('brandSub', { book })}</small>`;
    document.querySelectorAll('.loading').forEach(node => {
      const current = node.textContent.trim();
      if (/could not be found/i.test(current) || current === t('loadingMissing')) node.textContent = t('loadingMissing');
      else if (/being prepared/i.test(current) || current === t('loadingPreparing')) node.textContent = t('loadingPreparing');
      else node.textContent = t('loading');
    });
    setNodeText('#parentButton', t('parent'));
    document.querySelector('.summary')?.setAttribute('aria-label', t('overview'));
    setNodeText('.summary .intro b', t('overviewStrong'));
    setNodeText('.summary .intro span', t('overviewLead'));
    const metrics = document.querySelectorAll('.metric span');
    if (metrics[0]) metrics[0].textContent = t('problems');
    if (metrics[1]) metrics[1].textContent = t('solvedProblems');
    setNodeText('.library h2', t('chooseTopic'));
    setNodeText('.library > p', t('chooseTopicLead'));
    document.querySelector('#topics')?.setAttribute('aria-label', t('topics'));
    document.querySelector('#questionGrid')?.setAttribute('aria-label', t('problemPicker'));
    const currentId = Number(document.querySelector('.q-number.active')?.dataset.q || 1);
    const question = bank.find(item => item.id === currentId) || bank[0];
    if (!question) return;
    const topicName = topic(question.topic || 'Whole Numbers');
    setNodeText('#pickerName', document.querySelectorAll('.topic.active').length ? topicName : t('allProblems'));
    document.querySelectorAll('.topic').forEach(button => {
      const name = button.dataset.topic;
      const count = button.querySelector('span')?.outerHTML || '';
      const label = name === 'All' ? t('topicAll') : topic(name);
      if (button.innerHTML !== `${label}${count}`) button.innerHTML = `${label}${count}`;
    });
    document.querySelectorAll('.q-number').forEach(button => button.setAttribute('aria-label', t('openQuestion', { id: button.dataset.q })));
    setNodeText('.lesson .breadcrumb', t('breadcrumb', { topic: topicName, id: question.id, total: bank.length }));
    setNodeText('.lesson h1', t('lessonHeading'));
    setNodeText('.lesson .topic-pill', topicName);
    const paths = document.querySelectorAll('.path-step');
    [t('pathRead'), t('pathPicture'), t('pathWork'), t('pathCheck')].forEach((label, index) => { if (paths[index]) { const html = `<i>${index + 1}</i>${label}`; if (paths[index].innerHTML !== html) paths[index].innerHTML = html; } });
    setNodeText('.prompt-label', t('nextMove'));
    setNodeText('.work > h2', t('lessonTitle'));
    setNodeText('.work > .lead', t('lessonLead'));
    const modelButton = document.querySelector('#modelButton');
    if (modelButton) modelButton.textContent = document.querySelector('#model')?.classList.contains('show') ? (isChinese() ? '隐藏图示' : 'Hide visual model') : t('showModel');
    const hintButton = document.querySelector('#hintButton');
    if (hintButton) hintButton.textContent = document.querySelector('#hintBox')?.classList.contains('show') ? t('hideHint') : t('showHint');
    const hint = document.querySelector('#hintBox');
    if (hint) hint.textContent = `${t('hintPrefix')} ${question.hint}`;
    setNodeText('.scratchpad-head b', t('working'));
    setNodeText('.scratchpad-head span', t('workingNote'));
    const toggle = document.querySelector('#scratchpadToggle');
    if (toggle) toggle.textContent = toggle.getAttribute('aria-expanded') === 'true' ? t('hideWorking') : t('openWorking');
    setNodeText('#clearScratchpad', t('clearWorking'));
    const scratchpad = document.querySelector('#scratchpad');
    if (scratchpad) { scratchpad.placeholder = t('workingPlaceholder'); scratchpad.setAttribute('aria-label', t('workingAria', { id: question.id })); }
    setNodeText('.answer-area label', t('answer'));
    const answer = document.querySelector('#answer');
    if (answer) { answer.placeholder = t('answerPlaceholder'); answer.setAttribute('aria-label', t('answerAria', { id: question.id })); }
    setNodeText('#checkButton', t('checkAnswer'));
    const previous = document.querySelector('#previous'); const next = document.querySelector('#next');
    if (previous) previous.textContent = t('previous', { id: question.id === 1 ? bank.length : question.id - 1 });
    if (next) next.textContent = t('next', { id: question.id === bank.length ? 1 : question.id + 1 });
    const feedback = document.querySelector('#feedback');
    if (feedback?.classList.contains('good')) feedback.textContent = t('good');
    if (feedback?.classList.contains('nope')) feedback.textContent = t('notYet');
    setNodeText('.report .breadcrumb', t('thisPractice'));
    setNodeText('#reportTitle', t('parent'));
    document.querySelector('#closeSheet')?.setAttribute('aria-label', t('close'));
    const reportLabels = document.querySelectorAll('.report-stat span');
    [t('reportSolved'), t('attempted'), t('hints')].forEach((label, index) => { if (reportLabels[index]) reportLabels[index].textContent = label; });
    const advice = document.querySelectorAll('.report li');
    [t('parentAdvice1'), t('parentAdvice2'), t('parentAdvice3')].forEach((label, index) => { if (advice[index]) advice[index].textContent = label; });
    applyStoryMap(question);
  }
  function applyStoryMap(question) {
    const map = document.querySelector('#model');
    if (!map) return;
    if (map.querySelector('.answer-visual')) {
      setNodeText('.model-kicker', t('answerVisualKicker', { id: question.id }));
      setNodeText('.model h3', t('answerVisualTitle'));
      return;
    }
    const type = map.querySelector('.fraction-map') ? 'fraction' : map.querySelector('.money-map') ? 'money' : map.querySelector('.balance-map') ? 'mass' : map.querySelector('.shape-map') ? 'geometry' : (question.model === 'guess-check' ? 'guess' : question.model === 'bar-change' ? 'bar' : question.model === 'unit-bar' ? 'unit' : 'relationship');
    const titles = { bar:'modelBar', fraction:'modelFraction', unit:'modelUnit', money:'modelMoney', mass:'modelMass', geometry:'modelGeometry', guess:'modelGuess', relationship:'modelRelationship' };
    const focus = { bar:'focusBar', fraction:'focusFraction', unit:'focusUnit', money:'focusMoney', mass:'focusMass', geometry:'focusGeometry', guess:'focusGuess', relationship:'focusRelationship' };
    setNodeText('.model-caption', t('mapCaption'));
    setNodeText('.model-kicker', t('storyMap', { id: question.id }));
    setNodeText('.model h3', t('storyMapTitle', { title: t(titles[type]) }));
    setNodeText('.model-note', t(focus[type]));
    const valueLead = document.querySelector('.model-values > span'); if (valueLead) valueLead.textContent = t('keyValues');
    document.querySelectorAll('.fraction-readout span').forEach(node => node.textContent = t('whole'));
    const equalParts = document.querySelector('.fraction-label span:first-child'); if (equalParts) { const count = (equalParts.textContent.match(/\d+/) || [''])[0]; equalParts.textContent = t('equalParts', { count }); }
    setNodeText('.fraction-label span:last-child', t('findPart'));
    document.querySelectorAll('.money-map .story-card').forEach((card, index) => { const label = card.querySelector('span'); const note = card.querySelector('small'); if (label) label.textContent = t('moneyValue', { index: index + 1 }); if (note) note.textContent = t('fromQuestion'); });
    const target = document.querySelector('.target-card'); if (target) { setNodeText('span', t('nextStep'), target); setNodeText('strong', t('equalSets'), target); setNodeText('small', t('matchGroups'), target); }
    setNodeText('.known-side span', t('knownMeasure')); setNodeText('.unknown-side span', t('find'));
    document.querySelectorAll('.relation-cards:not(.money-map):not(.guess-map) .story-card').forEach((card, index) => { const label = card.querySelector('span'); const note = card.querySelector('small'); if (label) label.textContent = [t('knownValue'), t('compareWith'), t('target')][index] || label.textContent; if (note) note.textContent = index === 2 ? t('identify') : t('given'); });
    // a guess-and-check map lists candidate numbers, not a known/compare/target
    // triple, so it must not be relabelled by the rule above
    document.querySelectorAll('.guess-map .story-card').forEach(card => { const label = card.querySelector('span'); const note = card.querySelector('small'); if (label) label.textContent = t('numberInStory'); if (note) note.textContent = t('testCondition'); });
  }
  function startPractice(book, bank) {
    prepareBank(bank);
    bindLanguageButtons();
    const apply = () => { updateLanguageButtons(); applyPracticeChrome(book, bank); };
    const root = document.querySelector('#lesson') || document.body;
    let observer;
    const refresh = () => {
      observer.disconnect();
      apply();
      observer.observe(root, { childList: true, subtree: true });
    };
    observer = new MutationObserver(refresh);
    observer.observe(root, { childList: true, subtree: true });
    window.addEventListener('mathstorylanguagechange', () => { document.querySelector('.q-number.active')?.click(); refresh(); });
    refresh();
  }
  function applyHomeChrome() {
    document.title = t('homeTitle');
    setNodeText('.masthead .eyebrow', t('collection'));
    const title = document.querySelector('.masthead h1'); if (title) title.innerHTML = isChinese() ? '101 道挑战<br>数学应用题' : '101 Challenging<br>Math Word Problems';
    setNodeText('.masthead p', t('homeLead')); setNodeText('#books-title', t('chooseBook')); setNodeText('.footer', t('footer'));
    document.querySelectorAll('.book').forEach(card => {
      const number = card.dataset.book; setNodeText('.book-no', isChinese() ? '101 道挑战数学应用题' : '101 Challenging Math Word Problems', card); setNodeText('h2', isChinese() ? `第 ${number} 册` : `Book ${number}`, card); setNodeText('p', t(`bookDescription${number}`), card); setNodeText('.tag', t('practiceReady'), card);
      const ring = card.querySelector('.progress-ring'); if (ring) { const count = Number((ring.getAttribute('aria-label') || '').match(/\d+/)?.[0] || 0); ring.setAttribute('aria-label', t('completed', { count })); ring.title = t('completed', { count }); }
    });
    const selected = document.querySelector('.book[aria-pressed="true"]')?.dataset.book || '1';
    setNodeText('.detail .eyebrow', t('selected', { book: selected })); setNodeText('.detail h2', isChinese() ? `第 ${selected} 册` : `Book ${selected}`); setNodeText('.detail p', t('detail')); setNodeText('.detail-status', t('interactiveAvailable')); setNodeText('.detail .primary', t('startPractice', { book: selected })); setNodeText('.detail .secondary', t('openPdf')); setNodeText('.detail small', t('resources', { book: selected }));
  }
  function startHome() {
    bindLanguageButtons();
    const apply = () => { updateLanguageButtons(); applyHomeChrome(); };
    window.addEventListener('mathstorylanguagechange', () => apply());
    new MutationObserver(() => requestAnimationFrame(apply)).observe(document.querySelector('#bookGrid') || document.body, { childList: true, subtree: true });
    apply();
  }
  const style = document.createElement('style');
  style.textContent = '.language-switch{display:flex;gap:3px;padding:3px;border:1px solid #c9ddeb;border-radius:12px;background:#fff}.language-switch button{border:0;border-radius:8px;background:transparent;color:#526172;padding:7px 9px;font-size:12px;font-weight:850}.language-switch button.active{background:var(--violet,var(--active,#315d73));color:#fff}.language-switch button:focus-visible{outline:3px solid color-mix(in srgb,var(--violet,var(--active,#315d73)) 30%,transparent);outline-offset:2px}';
  document.head.append(style);
  window.MATH_I18N = { t, topic, getLanguage: () => language, setLanguage, prepareBank, startPractice, startHome };
})();
