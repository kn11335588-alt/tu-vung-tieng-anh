/* ============================================================
   WordWiz — Grade 10 vocabulary (Units 1–3)
   ============================================================ */
(() => {
  'use strict';

  /* ---------- Vocabulary data ---------- */
  const RAW_UNITS = [
    {
      id: 1,
      name: 'Family Life',
      vi: 'Cuộc sống gia đình',
      emoji: '🏡',
      colors: ['#ff8a5b', '#ff4d8d'],
      words: [
        ['Breadwinner', 'n', '/ˈbredwɪnər/', 'Người trụ cột gia đình'],
        ['Homemaker', 'n', '/ˈhəʊmmeɪkər/', 'Người nội trợ'],
        ['Housework', 'n', '/ˈhaʊswɜːk/', 'Công việc nhà'],
        ['Household chores', 'np', '/ˈhaʊshəʊld tʃɔːz/', 'Nhiệm vụ/việc vặt trong nhà'],
        ['Groceries', 'n', '/ˈɡrəʊsəriz/', 'Thực phẩm và tạp hóa'],
        ['Heavy lifting', 'np', '/ˌhevi ˈlɪftɪŋ/', 'Việc nặng nhọc'],
        ['Laundry', 'n', '/ˈlɔːndri/', 'Quần áo giặt giũ'],
        ['Washing-up', 'n', '/ˌwɒʃɪŋ ˈʌp/', 'Việc rửa chén bát'],
        ['Rubbish', 'n', '/ˈrʌbɪʃ/', 'Rác thải'],
        ['Financial burden', 'np', '/faɪˈnænʃl ˈbɜːdn/', 'Gánh nặng tài chính'],
        ['Responsibility', 'n', '/rɪˌspɒnsəˈbɪləti/', 'Trách nhiệm'],
        ['Gratitude', 'n', '/ˈɡrætɪtjuːd/', 'Lòng biết ơn'],
        ['Strengthen', 'v', '/ˈstreŋθn/', 'Củng cố, làm mạnh thêm'],
        ['Bond', 'n, v', '/bɒnd/', 'Sự gắn kết, gắn bó'],
        ['Character', 'n', '/ˈkærəktər/', 'Tính cách, nhân cách'],
        ['Nurture', 'v', '/ˈnɜːtʃər/', 'Nuôi dưỡng, chăm sóc'],
        ['Spotless', 'adj', '/ˈspɒtləs/', 'Sạch sẽ tinh tươm'],
        ['Divide', 'v', '/dɪˈvaɪd/', 'Phân chia'],
        ['Handle', 'v', '/ˈhændl/', 'Xử lý, giải quyết'],
        ['Supportive', 'adj', '/səˈpɔːtɪv/', 'Đem lại sự hỗ trợ, cổ vũ']
      ]
    },
    {
      id: 2,
      name: 'Humans & the Environment',
      vi: 'Con người và Môi trường',
      emoji: '🌱',
      colors: ['#22c55e', '#06b6d4'],
      words: [
        ['Environment', 'n', '/ɪnˈvaɪrənmənt/', 'Môi trường'],
        ['Eco-friendly', 'adj', '/ˌiːkəʊ ˈfrendli/', 'Thân thiện với môi trường'],
        ['Carbon footprint', 'np', '/ˌkɑːbən ˈfʊtprɪnt/', 'Lượng khí thải carbon'],
        ['Adopt', 'v', '/əˈdɒpt/', 'Áp dụng, tiếp nhận'],
        ['Lifestyle', 'n', '/ˈlaɪfstaɪl/', 'Lối sống, phong cách sống'],
        ['Awareness', 'n', '/əˈweənəs/', 'Nhận thức'],
        ['Appliances', 'n', '/əˈplaɪənsɪz/', 'Thiết bị, dụng cụ gia đình'],
        ['Energy', 'n', '/ˈenədʒi/', 'Năng lượng'],
        ['Renewable', 'adj', '/rɪˈnjuːəbl/', 'Có thể tái tạo'],
        ['Resource', 'n', '/rɪˈzɔːs/', 'Tài nguyên'],
        ['Reduce', 'v', '/rɪˈdjuːs/', 'Cắt giảm, giảm thiểu'],
        ['Reuse', 'v', '/ˌriːˈjuːz/', 'Tái sử dụng'],
        ['Recycle', 'v', '/ˌriːˈsaɪkl/', 'Tái chế'],
        ['Litter', 'n, v', '/ˈlɪtər/', 'Rác bẩn / Xả rác'],
        ['Organise', 'v', '/ˈɔːɡənaɪz/', 'Tổ chức'],
        ['Clean-up', 'n', '/ˈkliːn ʌp/', 'Chuyến/hoạt động dọn dẹp'],
        ['Plastic waste', 'np', '/ˈplæstɪk weɪst/', 'Rác thải nhựa'],
        ['Protect', 'v', '/prəˈtekt/', 'Bảo vệ'],
        ['Sustainable', 'adj', '/səˈsteɪnəbl/', 'Bền vững'],
        ['Encourage', 'v', '/ɪnˈkʌrɪdʒ/', 'Khuyến khích, động viên']
      ]
    },
    {
      id: 3,
      name: 'Music',
      vi: 'Âm nhạc',
      emoji: '🎵',
      colors: ['#7c5cff', '#d946ef'],
      words: [
        ['Audition', 'n', '/ɔːˈdɪʃn/', 'Buổi thử giọng, hát mẫu'],
        ['Talent contest', 'np', '/ˈtælənt kɒntest/', 'Cuộc thi tài năng'],
        ['Judge', 'n', '/dʒʌdʒ/', 'Giám khảo'],
        ['Performer', 'n', '/pəˈfɔːmər/', 'Nghệ sĩ biểu diễn'],
        ['Performance', 'n', '/pəˈfɔːməns/', 'Buổi biểu diễn'],
        ['Instrument', 'n', '/ˈɪnstrəmənt/', 'Nhạc cụ'],
        ['Musician', 'n', '/mjuˈzɪʃn/', 'Nhạc sĩ, vũ công/nhạc công'],
        ['Single', 'n', '/ˈsɪŋɡl/', 'Đĩa đơn'],
        ['Album', 'n', '/ˈælbəm/', 'Album ca nhạc'],
        ['Release', 'v', '/rɪˈliːs/', 'Phát hành, ra mắt'],
        ['Fan', 'n', '/fæn/', 'Người hâm mộ'],
        ['Identify', 'v', '/aɪˈdentɪfaɪ/', 'Nhận dạng, xác định'],
        ['Ordinary', 'adj', '/ˈɔːdnri/', 'Bình thường, giản dị'],
        ['Eliminate', 'v', '/ɪˈlɪmɪneɪt/', 'Loại bỏ, loại trừ'],
        ['Semi-final', 'n', '/ˌsemi ˈfaɪnl/', 'Vòng bán kết'],
        ['Decoration', 'n', '/ˌdekəˈreɪʃn/', 'Sự trang trí, đồ trang trí'],
        ['Inspirational', 'adj', '/ˌɪnspəˈreɪʃənl/', 'Truyền cảm hứng'],
        ['Upload', 'v', '/ˌʌpˈləʊd/', 'Tải lên'],
        ['Phenomenon', 'n', '/fəˈnɒmɪnən/', 'Hiện tượng'],
        ['Achievement', 'n', '/əˈtʃiːvmənt/', 'Thành tựu, đạt được']
      ]
    }
  ];

  const UNITS = RAW_UNITS.map((u) => ({
    ...u,
    words: u.words.map(([en, type, ipa, vi]) => ({ en, type, ipa, vi, unit: u.id, unitName: u.name }))
  }));
  const ALL_WORDS = UNITS.flatMap((u) => u.words);

  const TYPE_LABEL = {
    n: 'noun',
    v: 'verb',
    adj: 'adjective',
    np: 'noun phrase',
    'n, v': 'noun / verb'
  };
  const typeLabel = (t) => TYPE_LABEL[t] || t;

  /* ---------- Utilities ---------- */
  const $ = (sel) => document.querySelector(sel);
  const rand = (n) => Math.floor(Math.random() * n);

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const normalize = (s) => String(s).toLowerCase().replace(/[^a-z]/g, '');

  /* ---------- Persistence ---------- */
  const STORE_KEY = 'wordwiz.grade10.v1';

  function defaultStore() {
    return { xp: 0, learned: {}, best: { quiz: 0, test: 0, match: null, scramble: 0 } };
  }

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultStore();
      const data = JSON.parse(raw);
      return {
        xp: Number(data.xp) || 0,
        learned: data.learned && typeof data.learned === 'object' ? data.learned : {},
        best: { ...defaultStore().best, ...(data.best || {}) }
      };
    } catch (err) {
      return defaultStore();
    }
  }

  function saveStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (err) {
      /* storage may be unavailable */
    }
  }

  let store = loadStore();

  const masteredCount = () => ALL_WORDS.filter((w) => store.learned[w.en]).length;
  const poolFor = (filter) => (filter === 'all' ? ALL_WORDS : ALL_WORDS.filter((w) => w.unit === Number(filter)));

  /* ---------- Element refs ---------- */
  const els = {
    xpBadge: $('#xpBadge'),
    xpValue: $('#xpValue'),
    toast: $('#toast'),
    confetti: $('#confetti'),
    gamesViewHead: $('#view-games .view-head'),

    unitsGrid: $('#unitsGrid'),
    statXp: $('#statXp'),
    statMastered: $('#statMastered'),
    statQuiz: $('#statQuiz'),
    statTest: $('#statTest'),

    fcFilters: $('#fcFilters'),
    fcShuffle: $('#fcShuffle'),
    fcProgressFill: $('#fcProgressFill'),
    fcCounter: $('#fcCounter'),
    flipCard: $('#flipCard'),
    fcType: $('#fcType'),
    fcUnit: $('#fcUnit'),
    fcMastered: $('#fcMastered'),
    fcWord: $('#fcWord'),
    fcIpa: $('#fcIpa'),
    fcSpeak: $('#fcSpeak'),
    fcMeaning: $('#fcMeaning'),
    fcBackWord: $('#fcBackWord'),
    fcPrev: $('#fcPrev'),
    fcFlip: $('#fcFlip'),
    fcNext: $('#fcNext'),
    fcAgain: $('#fcAgain'),
    fcStats: $('#fcStats'),
    fcKnow: $('#fcKnow'),

    quizIntro: $('#quizIntro'),
    quizFilters: $('#quizFilters'),
    quizBest: $('#quizBest'),
    quizStart: $('#quizStart'),
    quizPlay: $('#quizPlay'),
    quizCounter: $('#quizCounter'),
    quizScore: $('#quizScore'),
    quizStreak: $('#quizStreak'),
    quizProgress: $('#quizProgress'),
    quizPrompt: $('#quizPrompt'),
    quizWord: $('#quizWord'),
    quizSub: $('#quizSub'),
    quizOptions: $('#quizOptions'),
    quizFeedback: $('#quizFeedback'),
    quizNext: $('#quizNext'),
    quizResult: $('#quizResult'),

    testIntro: $('#testIntro'),
    testFilters: $('#testFilters'),
    testBest: $('#testBest'),
    testStart: $('#testStart'),
    testPlay: $('#testPlay'),
    testCounter: $('#testCounter'),
    testTimerWrap: $('#testTimerWrap'),
    testTimer: $('#testTimer'),
    testProgress: $('#testProgress'),
    testType: $('#testType'),
    testPrompt: $('#testPrompt'),
    testWord: $('#testWord'),
    testSub: $('#testSub'),
    testOptions: $('#testOptions'),
    testForm: $('#testForm'),
    testInput: $('#testInput'),
    testFeedback: $('#testFeedback'),
    testNext: $('#testNext'),
    testQuit: $('#testQuit'),
    testResult: $('#testResult'),

    gamesMenu: $('#gamesMenu'),
    matchBest: $('#matchBest'),
    scrambleBest: $('#scrambleBest'),
    startMatch: $('#startMatch'),
    startScramble: $('#startScramble'),
    matchGame: $('#matchGame'),
    matchBack: $('#matchBack'),
    matchTimer: $('#matchTimer'),
    matchMoves: $('#matchMoves'),
    matchPairs: $('#matchPairs'),
    matchGrid: $('#matchGrid'),
    matchResult: $('#matchResult'),
    scrambleGame: $('#scrambleGame'),
    scramblePlay: $('#scramblePlay'),
    scrambleBack: $('#scrambleBack'),
    scRound: $('#scRound'),
    scScore: $('#scScore'),
    scMeaning: $('#scMeaning'),
    scMeta: $('#scMeta'),
    scAnswer: $('#scAnswer'),
    scLetters: $('#scLetters'),
    scHint: $('#scHint'),
    scUndo: $('#scUndo'),
    scResult: $('#scResult')
  };

  /* ---------- App state ---------- */
  const state = {
    view: 'home',
    flash: { filter: 'all', deck: [], index: 0, flipped: false },
    quiz: {
      filter: 'all', questions: [], index: 0, correct: 0, streak: 0,
      bestStreak: 0, answered: false, active: false, xpEarned: 0
    },
    test: {
      filter: 'all', questions: [], answers: [], index: 0, answered: false,
      active: false, duration: 300, timeLeft: 300, timerId: null, lastTick: 0
    },
    match: null,
    scramble: null
  };

  /* ---------- XP / toast / confetti ---------- */
  let toastTimer = null;

  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2100);
  }

  function updateXpBadge() {
    els.xpValue.textContent = store.xp.toLocaleString('en-US');
  }

  function addXP(amount) {
    if (!amount) return;
    store.xp += amount;
    saveStore();
    updateXpBadge();
    els.xpBadge.classList.remove('pop');
    void els.xpBadge.offsetWidth;
    els.xpBadge.classList.add('pop');
  }

  function confetti(count = 90) {
    const colors = ['#7c5cff', '#a855f7', '#ff5fa2', '#ffb443', '#12b981', '#22d3ee', '#ff8a5b'];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('i');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.width = `${6 + Math.random() * 7}px`;
      piece.style.height = `${9 + Math.random() * 10}px`;
      piece.style.background = colors[i % colors.length];
      piece.style.animationDuration = `${2.3 + Math.random() * 1.8}s`;
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      piece.style.opacity = '0.95';
      els.confetti.appendChild(piece);
      setTimeout(() => piece.remove(), 4700);
    }
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) {
      toast('Speech is not supported in this browser');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  /* ---------- Navigation ---------- */
  function showView(name) {
    if (state.view === 'test' && name !== 'test') stopTestClock();
    if (state.view === 'games' && name !== 'games') exitGames();
    stopSpeech();

    state.view = name;
    document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === `view-${name}`));
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (name === 'home') renderHome();
    if (name === 'flashcards') {
      if (!state.flash.deck.length) buildDeck();
      renderFlashcard();
    }
    if (name === 'quiz') {
      if (state.quiz.active) renderQuizQuestion();
      else showQuizIntro();
    }
    if (name === 'test') {
      if (state.test.active) startTestClock();
      else showTestIntro();
    }
    if (name === 'games') {
      updateGameBests();
    }
  }

  /* ---------- Home ---------- */
  function renderHome() {
    els.statXp.textContent = store.xp.toLocaleString('en-US');
    els.statMastered.textContent = `${masteredCount()}/${ALL_WORDS.length}`;
    els.statQuiz.textContent = store.best.quiz ? `${store.best.quiz}%` : '—';
    els.statTest.textContent = store.best.test ? `${store.best.test}%` : '—';

    els.unitsGrid.innerHTML = UNITS.map((u) => {
      const total = u.words.length;
      const done = u.words.filter((w) => store.learned[w.en]).length;
      const pct = Math.round((done / total) * 100);
      return `
        <article class="unit-card" style="--uA:${u.colors[0]};--uB:${u.colors[1]}">
          <div class="unit-top">
            <span class="unit-emoji">${u.emoji}</span>
            <span class="unit-count">${total} words</span>
          </div>
          <h3>Unit ${u.id} · ${u.name}</h3>
          <p>${u.vi}</p>
          <div class="unit-progress">
            <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
            <span>${done}/${total}</span>
          </div>
          <div class="unit-actions">
            <button class="btn btn-primary btn-small" data-study-unit="${u.id}" type="button">Study →</button>
            <button class="btn btn-outline btn-small" data-quiz-unit="${u.id}" type="button">Quiz</button>
          </div>
        </article>`;
    }).join('');
  }

  /* ---------- Unit filter chips ---------- */
  function setupChips(container, getFilter, setFilter, allLabel) {
    function draw() {
      const current = String(getFilter());
      const options = [{ id: 'all', label: allLabel, title: 'All 60 words' }].concat(
        UNITS.map((u) => ({ id: String(u.id), label: `Unit ${u.id}`, title: `Unit ${u.id} · ${u.name}` }))
      );
      container.innerHTML = '';
      options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip' + (opt.id === current ? ' active' : '');
        btn.textContent = opt.label;
        btn.title = opt.title;
        btn.addEventListener('click', () => {
          setFilter(opt.id);
          draw();
        });
        container.appendChild(btn);
      });
    }
    draw();
    return draw;
  }

  /* ============================================================
     FLASHCARDS
     ============================================================ */
  function buildDeck() {
    state.flash.deck = shuffle(poolFor(state.flash.filter));
    state.flash.index = 0;
    state.flash.flipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const f = state.flash;
    const card = f.deck[f.index];
    if (!card) return;
    const unit = UNITS.find((u) => u.id === card.unit);

    els.flipCard.style.setProperty('--accentA', unit.colors[0]);
    els.flipCard.style.setProperty('--accentB', unit.colors[1]);

    els.fcType.textContent = typeLabel(card.type);
    els.fcUnit.className = `tag unit-tag u${card.unit}`;
    els.fcUnit.textContent = `Unit ${card.unit} · ${card.unitName}`;
    els.fcWord.textContent = card.en;
    els.fcIpa.textContent = card.ipa;
    els.fcMeaning.textContent = card.vi;
    els.fcBackWord.textContent = `${card.en} · ${typeLabel(card.type)}`;
    els.fcMastered.classList.toggle('hidden', !store.learned[card.en]);

    els.fcCounter.textContent = `${f.index + 1} / ${f.deck.length}`;
    els.fcProgressFill.style.width = `${((f.index + 1) / f.deck.length) * 100}%`;
    els.fcStats.textContent = `Mastered ${masteredCount()} of ${ALL_WORDS.length}`;

    els.flipCard.classList.toggle('is-flipped', f.flipped);
  }

  function flipCard() {
    state.flash.flipped = !state.flash.flipped;
    els.flipCard.classList.toggle('is-flipped', state.flash.flipped);
  }

  function resetFlip() {
    state.flash.flipped = false;
    els.flipCard.classList.remove('is-flipped');
  }

  function nextCard() {
    stopSpeech();
    state.flash.index = (state.flash.index + 1) % state.flash.deck.length;
    state.flash.flipped = false;
    renderFlashcard();
  }

  function prevCard() {
    stopSpeech();
    state.flash.index = (state.flash.index - 1 + state.flash.deck.length) % state.flash.deck.length;
    state.flash.flipped = false;
    renderFlashcard();
  }

  function markKnown() {
    const card = state.flash.deck[state.flash.index];
    if (!card) return;
    if (!store.learned[card.en]) {
      store.learned[card.en] = true;
      saveStore();
      addXP(5);
      toast(`Mastered “${card.en}” · +5 XP`);
    } else {
      toast(`“${card.en}” is already mastered`);
    }
    nextCard();
  }

  function markAgain() {
    const card = state.flash.deck[state.flash.index];
    if (!card) return;
    if (store.learned[card.en]) {
      delete store.learned[card.en];
      saveStore();
      toast(`“${card.en}” added back to practice`);
    }
    nextCard();
  }

  const drawFcChips = setupChips(
    els.fcFilters,
    () => state.flash.filter,
    (id) => {
      state.flash.filter = id;
      buildDeck();
    },
    'All words'
  );

  /* ============================================================
     QUIZ
     ============================================================ */
  function buildOptions(word, pool) {
    const base = pool.length >= 4 ? pool : ALL_WORDS;
    const others = shuffle(base.filter((w) => w.en !== word.en)).slice(0, 3);
    if (others.length < 3) {
      const extra = shuffle(ALL_WORDS.filter((w) => w.en !== word.en && !others.some((o) => o.en === w.en)))
        .slice(0, 3 - others.length);
      others.push(...extra);
    }
    return shuffle([word, ...others]);
  }

  function buildQuizQuestions(pool, count) {
    const words = shuffle(pool).slice(0, count);
    return words.map((word) => ({
      word,
      direction: Math.random() < 0.5 ? 'en2vi' : 'vi2en',
      options: buildOptions(word, pool)
    }));
  }

  function updateQuizBestLabel() {
    els.quizBest.textContent = store.best.quiz ? `${store.best.quiz}%` : '—';
  }

  function showQuizIntro() {
    state.quiz.active = false;
    els.quizIntro.classList.remove('hidden');
    els.quizPlay.classList.add('hidden');
    els.quizResult.classList.add('hidden');
    updateQuizBestLabel();
  }

  function startQuiz() {
    const quiz = state.quiz;
    quiz.questions = buildQuizQuestions(poolFor(quiz.filter), 10);
    quiz.index = 0;
    quiz.correct = 0;
    quiz.streak = 0;
    quiz.bestStreak = 0;
    quiz.answered = false;
    quiz.active = true;
    quiz.xpEarned = 0;

    els.quizIntro.classList.add('hidden');
    els.quizResult.classList.add('hidden');
    els.quizPlay.classList.remove('hidden');
    renderQuizQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderQuizQuestion() {
    const quiz = state.quiz;
    const q = quiz.questions[quiz.index];
    if (!q) return;
    quiz.answered = false;

    const isEn = q.direction === 'en2vi';
    els.quizCounter.textContent = `Question ${quiz.index + 1} of ${quiz.questions.length}`;
    els.quizScore.textContent = `${quiz.correct} correct`;
    els.quizStreak.textContent = `🔥 ${quiz.streak}`;
    els.quizProgress.style.width = `${((quiz.index + 1) / quiz.questions.length) * 100}%`;

    els.quizPrompt.textContent = isEn ? 'What does this word mean?' : 'Which word matches this meaning?';
    els.quizWord.textContent = isEn ? q.word.en : q.word.vi;
    els.quizSub.textContent = isEn
      ? `${q.word.ipa} · ${typeLabel(q.word.type)}`
      : `Vietnamese meaning · ${typeLabel(q.word.type)}`;

    els.quizFeedback.textContent = '';
    els.quizFeedback.className = 'feedback';
    els.quizNext.disabled = true;
    els.quizNext.textContent = quiz.index === quiz.questions.length - 1 ? 'See results →' : 'Next →';

    const letters = ['A', 'B', 'C', 'D'];
    els.quizOptions.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.innerHTML = `<span class="key">${letters[i]}</span><span>${esc(isEn ? opt.vi : opt.en)}</span>`;
      btn.addEventListener('click', () => answerQuiz(btn, opt));
      els.quizOptions.appendChild(btn);
    });
  }

  function answerQuiz(btn, opt) {
    const quiz = state.quiz;
    if (!quiz.active || quiz.answered) return;
    quiz.answered = true;

    const q = quiz.questions[quiz.index];
    const correctIndex = q.options.findIndex((o) => o.en === q.word.en);
    const buttons = Array.from(els.quizOptions.children);
    const isCorrect = opt.en === q.word.en;

    buttons.forEach((b) => { b.disabled = true; });
    if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');

    if (isCorrect) {
      btn.classList.add('correct');
      quiz.correct++;
      quiz.streak++;
      quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak);
      quiz.xpEarned += 10;
      addXP(10);
      els.quizFeedback.textContent = `✓ Correct! ${q.word.en} = ${q.word.vi}`;
      els.quizFeedback.className = 'feedback good';
    } else {
      btn.classList.remove('selected');
      btn.classList.add('wrong');
      quiz.streak = 0;
      els.quizFeedback.textContent = `✗ Not quite — ${q.word.en} = ${q.word.vi}`;
      els.quizFeedback.className = 'feedback bad';
    }

    els.quizScore.textContent = `${quiz.correct} correct`;
    els.quizStreak.textContent = `🔥 ${quiz.streak}`;
    els.quizNext.disabled = false;
  }

  function finishQuiz() {
    const quiz = state.quiz;
    quiz.active = false;
    const total = quiz.questions.length;
    const pct = Math.round((quiz.correct / total) * 100);
    if (pct > store.best.quiz) {
      store.best.quiz = pct;
      saveStore();
    }

    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '💪' : '🌱';
    const title = pct >= 90 ? 'Flawless — word wizard!'
      : pct >= 70 ? 'Excellent work!'
        : pct >= 50 ? 'Solid effort!'
          : 'Every master starts somewhere';
    const subtitle = pct >= 70
      ? 'You know this set well. Try a unit test or raise the stakes in Word Scramble.'
      : 'Flip through the flashcards for the words you missed, then come back stronger.';

    els.quizPlay.classList.add('hidden');
    els.quizIntro.classList.add('hidden');
    els.quizResult.innerHTML = `
      <span class="result-emoji">${emoji}</span>
      <h3>${title}</h3>
      <p>${subtitle}</p>
      <div class="score-ring" style="--p:${pct};--ringA:${pct >= 80 ? '#12b981' : pct >= 50 ? '#7c5cff' : '#ff5fa2'}">
        <div class="ring-core"><strong>${quiz.correct}/${total}</strong><span>${pct}%</span></div>
      </div>
      <div class="result-meta">
        <span class="meta-chip">⚡ +${quiz.xpEarned} XP</span>
        <span class="meta-chip">🔥 Best streak ${quiz.bestStreak}</span>
        <span class="meta-chip">🏆 All-time best ${store.best.quiz}%</span>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary" data-act="quiz-again" type="button">Play again →</button>
        <button class="btn btn-ghost" data-act="quiz-home" type="button">Back home</button>
      </div>`;
    els.quizResult.classList.remove('hidden');
    renderHome();
    if (pct >= 80) confetti(110);
  }

  const drawQuizChips = setupChips(
    els.quizFilters,
    () => state.quiz.filter,
    (id) => {
      state.quiz.filter = id;
      updateQuizBestLabel();
    },
    'All words'
  );

  /* ============================================================
     TEST
     ============================================================ */
  function buildTestQuestions(pool) {
    const words = shuffle(pool);
    const mcqWords = words.slice(0, 10);
    const rest = words.slice(10);
    let typeWords = rest.filter((w) => /^[A-Za-z]+$/.test(w.en) && w.en.length <= 13).slice(0, 5);

    if (typeWords.length < 5) {
      const extra = shuffle(
        ALL_WORDS.filter((w) =>
          !mcqWords.includes(w) &&
          !typeWords.includes(w) &&
          /^[A-Za-z]+$/.test(w.en) &&
          w.en.length <= 13
        )
      ).slice(0, 5 - typeWords.length);
      typeWords = typeWords.concat(extra);
    }

    const questions = mcqWords.map((word) => ({
      kind: 'mcq',
      word,
      direction: Math.random() < 0.5 ? 'en2vi' : 'vi2en',
      options: buildOptions(word, pool)
    }));
    typeWords.forEach((word) => questions.push({ kind: 'type', word }));
    return shuffle(questions);
  }

  function updateTestBestLabel() {
    els.testBest.textContent = store.best.test ? `${store.best.test}%` : '—';
  }

  function showTestIntro() {
    state.test.active = false;
    els.testIntro.classList.remove('hidden');
    els.testPlay.classList.add('hidden');
    els.testResult.classList.add('hidden');
    updateTestBestLabel();
  }

  function updateTimerUI() {
    const t = state.test;
    const secs = Math.max(0, Math.ceil(t.timeLeft));
    const mm = String(Math.floor(secs / 60)).padStart(2, '0');
    const ss = String(secs % 60).padStart(2, '0');
    els.testTimer.textContent = `${mm}:${ss}`;
    els.testTimerWrap.classList.toggle('low', secs <= 60);
  }

  function startTestClock() {
    stopTestClock();
    state.test.lastTick = Date.now();
    state.test.timerId = setInterval(() => {
      const now = Date.now();
      state.test.timeLeft -= (now - state.test.lastTick) / 1000;
      state.test.lastTick = now;
      if (state.test.timeLeft <= 0) {
        state.test.timeLeft = 0;
        updateTimerUI();
        finishTest(true);
        return;
      }
      updateTimerUI();
    }, 250);
  }

  function stopTestClock() {
    if (state.test.timerId) {
      clearInterval(state.test.timerId);
      state.test.timerId = null;
    }
  }

  function startTest() {
    const t = state.test;
    t.questions = buildTestQuestions(poolFor(t.filter));
    t.answers = [];
    t.index = 0;
    t.answered = false;
    t.timeLeft = t.duration;
    t.active = true;

    els.testIntro.classList.add('hidden');
    els.testResult.classList.add('hidden');
    els.testPlay.classList.remove('hidden');
    renderTestQuestion();
    updateTimerUI();
    startTestClock();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderTestQuestion() {
    const t = state.test;
    const q = t.questions[t.index];
    if (!q) return;
    const saved = t.answers[t.index];
    t.answered = Boolean(saved);

    els.testCounter.textContent = `Question ${t.index + 1} of ${t.questions.length}`;
    els.testProgress.style.width = `${(t.index / t.questions.length) * 100}%`;
    els.testNext.disabled = !t.answered;
    els.testNext.textContent = t.index === t.questions.length - 1 ? 'Finish test →' : 'Next →';
    els.testFeedback.textContent = saved ? 'Answer saved ✓' : '';
    els.testFeedback.className = saved ? 'feedback good' : 'feedback';

    if (q.kind === 'mcq') {
      const isEn = q.direction === 'en2vi';
      els.testType.textContent = isEn ? 'Multiple choice · EN → VI' : 'Multiple choice · VI → EN';
      els.testPrompt.textContent = isEn ? 'What does this word mean?' : 'Which word matches this meaning?';
      els.testWord.textContent = isEn ? q.word.en : q.word.vi;
      els.testSub.textContent = isEn
        ? `${q.word.ipa} · ${typeLabel(q.word.type)}`
        : `Vietnamese meaning · ${typeLabel(q.word.type)}`;

      els.testOptions.classList.remove('hidden');
      els.testForm.classList.add('hidden');
      els.testInput.disabled = false;

      const letters = ['A', 'B', 'C', 'D'];
      els.testOptions.innerHTML = '';
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option';
        btn.innerHTML = `<span class="key">${letters[i]}</span><span>${esc(isEn ? opt.vi : opt.en)}</span>`;
        if (saved) {
          btn.disabled = true;
          if (saved.given === (isEn ? opt.vi : opt.en)) btn.classList.add('picked');
        } else {
          btn.addEventListener('click', () => recordTestAnswer(isEn ? opt.vi : opt.en, btn));
        }
        els.testOptions.appendChild(btn);
      });
    } else {
      els.testType.textContent = 'Type the answer · VI → EN';
      els.testPrompt.textContent = 'Type the English word for';
      els.testWord.textContent = q.word.vi;
      els.testSub.textContent = `${typeLabel(q.word.type)} · ${q.word.en.length} letters · starts with “${q.word.en[0]}”`;
      els.testOptions.classList.add('hidden');
      els.testOptions.innerHTML = '';
      els.testForm.classList.remove('hidden');
      els.testInput.disabled = Boolean(saved);
      els.testInput.value = saved ? saved.given : '';
      els.testForm.querySelector('button').disabled = Boolean(saved);
      if (!saved) setTimeout(() => els.testInput.focus(), 60);
    }
  }

  function recordTestAnswer(given, btn) {
    const t = state.test;
    if (!t.active || t.answered) return;
    const q = t.questions[t.index];
    const isCorrect = normalize(given) === normalize(q.word.en);
    t.answers[t.index] = { given, correct: isCorrect };
    t.answered = true;

    if (btn) {
      btn.classList.add('picked');
      Array.from(els.testOptions.children).forEach((b) => { b.disabled = true; });
    } else {
      els.testInput.disabled = true;
      els.testForm.querySelector('button').disabled = true;
    }

    els.testFeedback.textContent = 'Answer saved ✓';
    els.testFeedback.className = 'feedback good';
    els.testNext.disabled = false;
  }

  function nextTestQuestion() {
    const t = state.test;
    if (!t.active || !t.answered) return;
    if (t.index === t.questions.length - 1) {
      finishTest(false);
      return;
    }
    t.index++;
    t.answered = false;
    renderTestQuestion();
  }

  function formatDuration(seconds) {
    const secs = Math.max(0, Math.round(seconds));
    return `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`;
  }

  function finishTest(timeUp) {
    const t = state.test;
    if (!t.active) return;
    stopTestClock();
    t.active = false;

    const total = t.questions.length;
    const correct = t.answers.filter((a) => a && a.correct).length;
    const pct = Math.round((correct / total) * 100);
    const used = Math.max(0, t.duration - t.timeLeft);

    if (pct > store.best.test) {
      store.best.test = pct;
      saveStore();
    }
    const xp = correct * 12;
    addXP(xp);

    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '💪' : '🌱';
    const title = timeUp
      ? (pct >= 70 ? 'Time! But you nailed it.' : 'Time is up!')
      : pct >= 90 ? 'Outstanding result!'
        : pct >= 70 ? 'Great job!'
          : pct >= 50 ? 'You are getting there'
            : 'Keep practising — you got this';

    const review = t.questions.map((q, i) => {
      const a = t.answers[i];
      const ok = Boolean(a && a.correct);
      const given = a ? a.given : 'No answer';
      return `
        <div class="review-item ${ok ? 'ok' : 'no'}">
          <span class="mark">${ok ? '✓' : '✗'}</span>
          <div>
            <b>${i + 1}. ${esc(q.word.en)}</b>
            <span class="ans">= ${esc(q.word.vi)}</span><br>
            <span class="ans">Your answer: <span class="given">${esc(given)}</span></span>
          </div>
        </div>`;
    }).join('');

    els.testPlay.classList.add('hidden');
    els.testIntro.classList.add('hidden');
    els.testResult.innerHTML = `
      <span class="result-emoji">${emoji}</span>
      <h3>${title}</h3>
      <p>${timeUp ? 'The clock ran out — unanswered questions were marked wrong.' : 'Here is how you did, question by question.'}</p>
      <div class="score-ring" style="--p:${pct};--ringA:${pct >= 80 ? '#12b981' : pct >= 50 ? '#7c5cff' : '#ff5fa2'}">
        <div class="ring-core"><strong>${correct}/${total}</strong><span>${pct}%</span></div>
      </div>
      <div class="result-meta">
        <span class="meta-chip">⏱ ${formatDuration(used)} used</span>
        <span class="meta-chip">⚡ +${xp} XP</span>
        <span class="meta-chip">🏆 All-time best ${store.best.test}%</span>
      </div>
      <div class="review-list">${review}</div>
      <div class="result-actions">
        <button class="btn btn-primary" data-act="test-again" type="button">Try again →</button>
        <button class="btn btn-ghost" data-act="test-home" type="button">Back home</button>
      </div>`;
    els.testResult.classList.remove('hidden');
    renderHome();
    if (pct >= 70) confetti(120);
    if (timeUp) toast('Time is up — test submitted automatically');
  }

  const drawTestChips = setupChips(
    els.testFilters,
    () => state.test.filter,
    (id) => {
      state.test.filter = id;
      updateTestBestLabel();
    },
    'All words'
  );

  /* ============================================================
     MATCH MADNESS
     ============================================================ */
  function updateGameBests() {
    els.matchBest.textContent = store.best.match ? `Best: ${store.best.match.toFixed(1)}s` : 'Best: —';
    els.scrambleBest.textContent = store.best.scramble ? `Best: ${store.best.scramble} pts` : 'Best: —';
  }

  function startMatch() {
    stopMatchClock();
    const pairs = shuffle(ALL_WORDS).slice(0, 8);
    const tiles = [];
    pairs.forEach((w, id) => {
      tiles.push({ id, lang: 'en', text: w.en });
      tiles.push({ id, lang: 'vi', text: w.vi });
    });

    state.match = {
      pairs,
      tiles: shuffle(tiles),
      selected: null,
      matched: 0,
      moves: 0,
      mistakes: 0,
      elapsed: 0,
      startTs: 0,
      timerId: null,
      locked: false,
      completed: false
    };

    els.gamesMenu.classList.add('hidden');
    els.gamesViewHead.classList.add('hidden');
    els.scrambleGame.classList.add('hidden');
    els.matchResult.classList.add('hidden');
    els.matchResult.innerHTML = '';
    els.matchGame.classList.remove('hidden');

    els.matchGrid.innerHTML = state.match.tiles.map((t, i) => `
      <button class="match-tile ${t.lang}" data-index="${i}" type="button">
        <span class="lang">${t.lang.toUpperCase()}</span>
        <span>${esc(t.text)}</span>
      </button>`).join('');

    els.matchTimer.textContent = '0.0s';
    els.matchMoves.textContent = '0';
    els.matchPairs.textContent = '0';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startMatchClock() {
    const m = state.match;
    if (!m || m.timerId) return;
    m.startTs = Date.now() - m.elapsed * 1000;
    m.timerId = setInterval(() => {
      m.elapsed = (Date.now() - m.startTs) / 1000;
      els.matchTimer.textContent = `${m.elapsed.toFixed(1)}s`;
    }, 100);
  }

  function stopMatchClock() {
    if (state.match && state.match.timerId) {
      clearInterval(state.match.timerId);
      state.match.timerId = null;
    }
  }

  function matchTileEl(index) {
    return els.matchGrid.children[index];
  }

  function onMatchTile(index) {
    const m = state.match;
    if (!m || m.completed || m.locked) return;
    const el = matchTileEl(index);
    if (!el || el.classList.contains('matched')) return;

    const tile = m.tiles[index];

    if (m.selected === index) {
      el.classList.remove('selected');
      m.selected = null;
      return;
    }

    if (m.selected === null) {
      m.selected = index;
      el.classList.add('selected');
      startMatchClock();
      return;
    }

    const prevIndex = m.selected;
    const prevTile = m.tiles[prevIndex];
    const prevEl = matchTileEl(prevIndex);
    m.moves++;
    els.matchMoves.textContent = String(m.moves);

    if (tile.id === prevTile.id && tile.lang !== prevTile.lang) {
      el.classList.add('matched');
      prevEl.classList.add('matched');
      el.classList.remove('selected');
      prevEl.classList.remove('selected');
      m.matched++;
      m.selected = null;
      els.matchPairs.textContent = String(m.matched);
      if (m.matched === m.pairs.length) finishMatch();
    } else {
      m.locked = true;
      m.mistakes++;
      el.classList.add('wrong');
      prevEl.classList.add('wrong');
      m.selected = null;
      setTimeout(() => {
        const current = state.match;
        if (!current || current.matched === current.pairs.length) return;
        el.classList.remove('wrong');
        prevEl.classList.remove('wrong', 'selected');
        current.locked = false;
      }, 620);
    }
  }

  function finishMatch() {
    const m = state.match;
    if (!m) return;
    m.completed = true;
    stopMatchClock();
    const secs = Math.max(0.1, m.elapsed);
    els.matchTimer.textContent = `${secs.toFixed(1)}s`;
    const perfect = m.moves === m.pairs.length;

    if (!store.best.match || secs < store.best.match) {
      store.best.match = Number(secs.toFixed(1));
      saveStore();
    }

    const xp = perfect ? 60 : 40;
    addXP(xp);
    updateGameBests();

    els.matchResult.innerHTML = `
      <span class="result-emoji">🎉</span>
      <h3>All matched!</h3>
      <p>You cleared the board in <b>${secs.toFixed(1)}s</b> with <b>${m.moves}</b> moves${perfect ? ' — a perfect run!' : '.'}</p>
      <div class="result-meta">
        <span class="meta-chip">⏱ ${secs.toFixed(1)}s</span>
        <span class="meta-chip">🎯 ${m.moves} moves</span>
        <span class="meta-chip">⚡ +${xp} XP</span>
        <span class="meta-chip">🏆 Best ${store.best.match.toFixed(1)}s</span>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary" data-act="match-again" type="button">Play again →</button>
        <button class="btn btn-ghost" data-act="games" type="button">All games</button>
      </div>`;
    els.matchResult.classList.remove('hidden');
    els.matchResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    confetti(80);
  }

  /* ============================================================
     WORD SCRAMBLE
     ============================================================ */
  function startScramble() {
    const candidates = ALL_WORDS.filter((w) => /^[A-Za-z]{4,12}$/.test(w.en));
    const words = shuffle(candidates).slice(0, 8);

    state.scramble = {
      words,
      round: 0,
      score: 0,
      combo: 0,
      bestCombo: 0,
      hints: 0,
      active: true,
      locked: false,
      solved: false,
      word: null,
      letters: [],
      answer: [],
      advanceTimer: null
    };

    els.gamesMenu.classList.add('hidden');
    els.gamesViewHead.classList.add('hidden');
    els.matchGame.classList.add('hidden');
    els.scResult.classList.add('hidden');
    els.scramblePlay.classList.remove('hidden');
    els.scrambleGame.classList.remove('hidden');
    loadScrambleRound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function loadScrambleRound() {
    const g = state.scramble;
    if (!g) return;
    const word = g.words[g.round];
    if (!word) return;

    let letters = shuffle(word.en.split(''));
    let guard = 0;
    while (letters.join('').toLowerCase() === word.en.toLowerCase() && guard < 10) {
      letters = shuffle(word.en.split(''));
      guard++;
    }

    g.word = word;
    g.letters = letters.map((ch) => ({ ch, used: false }));
    g.answer = [];
    g.locked = false;
    g.solved = false;
    els.scAnswer.classList.remove('solved', 'shake');
    renderScramble();
  }

  function renderScramble() {
    const g = state.scramble;
    if (!g || !g.word) return;

    els.scRound.textContent = String(g.round + 1);
    els.scScore.textContent = String(g.score);
    els.scMeaning.textContent = g.word.vi;
    els.scMeta.textContent = `${typeLabel(g.word.type)} · ${g.word.en.length} letters · 🔥 combo x${g.combo}`;

    els.scLetters.innerHTML = '';
    g.letters.forEach((tile, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sc-letter' + (tile.used ? ' used' : '');
      btn.textContent = tile.ch;
      btn.disabled = tile.used || g.locked;
      btn.addEventListener('click', () => pickLetter(i));
      els.scLetters.appendChild(btn);
    });

    els.scAnswer.innerHTML = '';
    for (let i = 0; i < g.word.en.length; i++) {
      if (i < g.answer.length) {
        const tile = g.letters[g.answer[i]];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sc-slot filled';
        btn.textContent = tile.ch;
        btn.addEventListener('click', () => removeFromScramble(i));
        els.scAnswer.appendChild(btn);
      } else {
        const slot = document.createElement('span');
        slot.className = 'sc-slot empty';
        els.scAnswer.appendChild(slot);
      }
    }
  }

  function pickLetter(index) {
    const g = state.scramble;
    if (!g || g.locked || g.solved) return;
    const tile = g.letters[index];
    if (!tile || tile.used) return;

    tile.used = true;
    g.answer.push(index);
    renderScramble();

    if (g.answer.length === g.word.en.length) checkScramble();
  }

  function removeFromScramble(position) {
    const g = state.scramble;
    if (!g || g.locked || g.solved) return;
    if (position < 0 || position >= g.answer.length) return;
    const removed = g.answer.splice(position);
    removed.forEach((i) => { g.letters[i].used = false; });
    renderScramble();
  }

  function undoScramble() {
    const g = state.scramble;
    if (!g || g.locked || g.solved || !g.answer.length) return;
    removeFromScramble(g.answer.length - 1);
  }

  function hintScramble() {
    const g = state.scramble;
    if (!g || g.locked || g.solved) return;
    const target = g.word.en;
    const pos = g.answer.length;
    if (pos >= target.length) return;
    const needed = target[pos].toLowerCase();
    const tileIndex = g.letters.findIndex((t) => !t.used && t.ch.toLowerCase() === needed);
    if (tileIndex === -1) return;

    g.letters[tileIndex].used = true;
    g.answer.push(tileIndex);
    g.hints++;
    g.score = Math.max(0, g.score - 10);
    renderScramble();
    toast('Hint used · −10 pts');

    if (g.answer.length === target.length) checkScramble();
  }

  function checkScramble() {
    const g = state.scramble;
    if (!g) return;
    const built = g.answer.map((i) => g.letters[i].ch).join('');

    if (built.toLowerCase() === g.word.en.toLowerCase()) {
      g.locked = true;
      g.solved = true;
      g.combo++;
      g.bestCombo = Math.max(g.bestCombo, g.combo);
      const points = 100 + (g.combo - 1) * 25;
      g.score += points;
      els.scAnswer.classList.add('solved');
      renderScramble();
      toast(`✓ ${g.word.en} · +${points} pts`);
      g.advanceTimer = setTimeout(() => {
        if (!state.scramble || !state.scramble.active) return;
        nextScrambleRound();
      }, 1000);
    } else {
      g.locked = true;
      els.scAnswer.classList.add('shake');
      renderScramble();
      g.advanceTimer = setTimeout(() => {
        if (!state.scramble || !state.scramble.active) return;
        g.answer = [];
        g.letters.forEach((t) => { t.used = false; });
        g.locked = false;
        g.combo = 0;
        els.scAnswer.classList.remove('shake');
        renderScramble();
      }, 700);
    }
  }

  function nextScrambleRound() {
    const g = state.scramble;
    if (!g || !g.active) return;
    g.round++;
    if (g.round >= g.words.length) {
      finishScramble();
      return;
    }
    loadScrambleRound();
  }

  function finishScramble() {
    const g = state.scramble;
    if (!g) return;
    g.active = false;
    g.locked = true;
    if (g.advanceTimer) {
      clearTimeout(g.advanceTimer);
      g.advanceTimer = null;
    }

    const xp = Math.round(g.score / 10);
    if (xp) addXP(xp);
    if (g.score > store.best.scramble) {
      store.best.scramble = g.score;
      saveStore();
    }
    updateGameBests();

    els.scramblePlay.classList.add('hidden');
    els.scResult.innerHTML = `
      <span class="result-emoji">🔤</span>
      <h3>Eight rounds done!</h3>
      <p>You scored <b>${g.score} points</b> with a best combo of <b>x${g.bestCombo}</b>.</p>
      <div class="score-ring" style="--p:${Math.min(100, Math.round((g.score / 1200) * 100))};--ringA:#06b6d4">
        <div class="ring-core"><strong>${g.score}</strong><span>points</span></div>
      </div>
      <div class="result-meta">
        <span class="meta-chip">🔥 Best combo x${g.bestCombo}</span>
        <span class="meta-chip">💡 ${g.hints} hints</span>
        <span class="meta-chip">⚡ +${xp} XP</span>
        <span class="meta-chip">🏆 Best ${store.best.scramble} pts</span>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary" data-act="scramble-again" type="button">Play again →</button>
        <button class="btn btn-ghost" data-act="games" type="button">All games</button>
      </div>`;
    els.scResult.classList.remove('hidden');
    if (g.score >= 500) confetti(90);
  }

  function exitGames() {
    stopMatchClock();
    if (state.scramble) {
      state.scramble.active = false;
      if (state.scramble.advanceTimer) {
        clearTimeout(state.scramble.advanceTimer);
        state.scramble.advanceTimer = null;
      }
    }
    els.gamesMenu.classList.remove('hidden');
    els.gamesViewHead.classList.remove('hidden');
    els.matchGame.classList.add('hidden');
    els.scrambleGame.classList.add('hidden');
    els.matchResult.classList.add('hidden');
    els.scResult.classList.add('hidden');
    updateGameBests();
  }

  /* ============================================================
     EVENT WIRING
     ============================================================ */
  // Navigation
  $('#nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn');
    if (btn) showView(btn.dataset.view);
  });

  document.querySelector('.brand').addEventListener('click', (e) => {
    e.preventDefault();
    showView('home');
  });

  // Delegated actions
  document.addEventListener('click', (e) => {
    const go = e.target.closest('[data-go]');
    if (go) {
      showView(go.dataset.go);
      return;
    }

    const study = e.target.closest('[data-study-unit]');
    if (study) {
      state.flash.filter = String(study.dataset.studyUnit);
      drawFcChips();
      buildDeck();
      showView('flashcards');
      toast(`Unit ${state.flash.filter} deck loaded`);
      return;
    }

    const quizUnit = e.target.closest('[data-quiz-unit]');
    if (quizUnit) {
      state.quiz.filter = String(quizUnit.dataset.quizUnit);
      drawQuizChips();
      updateQuizBestLabel();
      showView('quiz');
      return;
    }

    const act = e.target.closest('[data-act]');
    if (act) {
      const a = act.dataset.act;
      if (a === 'quiz-again') startQuiz();
      if (a === 'quiz-home') showView('home');
      if (a === 'test-again') startTest();
      if (a === 'test-home') showView('home');
      if (a === 'match-again') startMatch();
      if (a === 'scramble-again') startScramble();
      if (a === 'games') exitGames();
    }
  });

  // Flashcards
  els.flipCard.addEventListener('click', (e) => {
    if (e.target.closest('.speak')) return;
    flipCard();
  });
  els.flipCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      flipCard();
    }
  });
  els.fcFlip.addEventListener('click', flipCard);
  els.fcNext.addEventListener('click', nextCard);
  els.fcPrev.addEventListener('click', prevCard);
  els.fcKnow.addEventListener('click', markKnown);
  els.fcAgain.addEventListener('click', markAgain);
  els.fcSpeak.addEventListener('click', (e) => {
    e.stopPropagation();
    speak(state.flash.deck[state.flash.index].en);
  });
  els.fcShuffle.addEventListener('click', () => {
    buildDeck();
    toast('Deck shuffled 🔀');
  });

  document.addEventListener('keydown', (e) => {
    if (state.view !== 'flashcards') return;
    if (e.target.matches('input, textarea')) return;
    if (e.code === 'Space') {
      e.preventDefault();
      flipCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    } else if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key.toLowerCase() === 'k') {
      markKnown();
    }
  });

  // Quiz
  els.quizStart.addEventListener('click', startQuiz);
  els.quizNext.addEventListener('click', () => {
    const quiz = state.quiz;
    if (!quiz.active || !quiz.answered) return;
    quiz.index++;
    if (quiz.index >= quiz.questions.length) {
      finishQuiz();
      return;
    }
    quiz.answered = false;
    renderQuizQuestion();
  });

  // Test
  els.testStart.addEventListener('click', startTest);
  els.testNext.addEventListener('click', nextTestQuestion);
  els.testQuit.addEventListener('click', () => {
    if (!state.test.active && els.testPlay.classList.contains('hidden')) return;
    stopTestClock();
    state.test.active = false;
    state.test.answers = [];
    els.testPlay.classList.add('hidden');
    els.testResult.classList.add('hidden');
    els.testIntro.classList.remove('hidden');
    toast('Test cancelled');
  });
  els.testForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = state.test;
    if (!t.active || t.answered) return;
    const value = els.testInput.value.trim();
    if (!value) return;
    recordTestAnswer(value, null);
  });
  els.testInput.addEventListener('input', () => {
    els.testFeedback.textContent = '';
    els.testFeedback.className = 'feedback';
  });

  // Games
  els.startMatch.addEventListener('click', startMatch);
  els.startScramble.addEventListener('click', startScramble);
  els.matchBack.addEventListener('click', exitGames);
  els.scrambleBack.addEventListener('click', exitGames);
  els.matchGrid.addEventListener('click', (e) => {
    const tile = e.target.closest('.match-tile');
    if (tile) onMatchTile(Number(tile.dataset.index));
  });
  els.scHint.addEventListener('click', hintScramble);
  els.scUndo.addEventListener('click', undoScramble);

  /* ---------- Init ---------- */
  updateXpBadge();
  renderHome();
  updateGameBests();
  updateQuizBestLabel();
  updateTestBestLabel();
  buildDeck();
  showQuizIntro();
  showTestIntro();
  updateTimerUI();
})();
