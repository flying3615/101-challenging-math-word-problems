(() => {
  const selector = 'textarea[data-scratch-key][data-question-id]';
  const readStore = (key) => {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch { return {}; }
  };
  const save = (textarea) => {
    const key = textarea.dataset.scratchKey;
    const store = readStore(key);
    store[textarea.dataset.questionId] = textarea.value;
    localStorage.setItem(key, JSON.stringify(store));
  };
  const restore = (textarea) => {
    if (textarea.dataset.ready) return;
    const store = readStore(textarea.dataset.scratchKey);
    textarea.value = String(store[textarea.dataset.questionId] || '');
    textarea.dataset.ready = 'true';
  };
  const wire = (root = document) => root.querySelectorAll(selector).forEach(restore);
  document.addEventListener('input', (event) => {
    if (event.target.matches(selector)) save(event.target);
  });
  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-scratchpad-toggle]');
    if (toggle) {
      const area = toggle.closest('.scratchpad-area');
      const content = area?.querySelector('.scratchpad-content');
      const textarea = area?.querySelector(selector);
      if (!content || !textarea) return;
      const opening = content.hidden;
      content.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.textContent = opening ? 'Hide working space' : 'Open working space';
      if (opening) textarea.focus();
      return;
    }
    const button = event.target.closest('[data-clear-scratchpad]');
    if (!button) return;
    const textarea = button.closest('.scratchpad-area')?.querySelector(selector);
    if (!textarea) return;
    textarea.value = '';
    save(textarea);
    textarea.focus();
  });
  const observer = new MutationObserver(() => wire());
  observer.observe(document.documentElement, { childList: true, subtree: true });
  wire();
})();
