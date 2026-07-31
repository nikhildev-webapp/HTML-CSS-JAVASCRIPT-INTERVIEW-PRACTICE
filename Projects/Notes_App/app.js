(function(){
  const STORAGE_KEY = 'marginalia_notes_v1';
  const TAGS = [
    { id: 'none',   label: 'plain',   color: '#5f636f' },
    { id: 'idea',   label: 'idea',    color: '#e2a33d' },
    { id: 'task',   label: 'task',    color: '#6fb0d6' },
    { id: 'log',    label: 'log',     color: '#8fbf7a' },
    { id: 'read',   label: 'reading', color: '#c084c9' },
  ];
 
  let notes = [];
  let activeId = null;
  let activeTagFilter = null;
  let searchQuery = '';
  let saveTimeout = null;
 
  const els = {
    noteList: document.getElementById('noteList'),
    noteCount: document.getElementById('noteCount'),
    searchInput: document.getElementById('searchInput'),
    newNoteBtn: document.getElementById('newNoteBtn'),
    tagFilters: document.getElementById('tagFilters'),
    editorBody: document.getElementById('editorBody'),
    tagSelect: document.getElementById('tagSelect'),
    editorActions: document.getElementById('editorActions'),
    pinBtn: document.getElementById('pinBtn'),
    deleteBtn: document.getElementById('deleteBtn'),
    saveIndicator: document.getElementById('saveIndicator'),
    sidebar: document.getElementById('sidebar'),
    overlay: document.getElementById('overlay'),
    menuBtn: document.getElementById('menuBtn'),
  };
 
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
 
  function load(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      notes = raw ? JSON.parse(raw) : seedNotes();
    }catch(e){ notes = seedNotes(); }
    if(notes.length) activeId = notes[0].id;
  }
 
  function seedNotes(){
    const now = Date.now();
    return [
      {
        id: uid(), title: 'Welcome to Marginalia',
        content: 'This is a notebook for the margins of your day.\n\nType here, or press the + button to start a fresh page. Everything saves automatically to this browser — nothing leaves your device.\n\nUse the dots up top to color-tag a note, and the pin icon to keep something at the top of the list.',
        tag: 'idea', pinned: true, updatedAt: now
      },
      {
        id: uid(), title: 'Grocery run',
        content: '- oat milk\n- coffee, dark roast\n- lemons\n- something green for dinner',
        tag: 'task', pinned: false, updatedAt: now - 1000*60*60*5
      },
      {
        id: uid(), title: 'Reading: on margins',
        content: 'Marginalia — notes made in the margins of a book. The word felt right for a notes app: small, handwritten, half-private thoughts living next to the main text of the day.',
        tag: 'read', pinned: false, updatedAt: now - 1000*60*60*24*2
      },
    ];
  }
 
  function persist(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }
 
  function getActive(){ return notes.find(n => n.id === activeId) || null; }
 
  function tagInfo(id){ return TAGS.find(t => t.id === id) || TAGS[0]; }
 
  function fmtTime(ts){
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if(sameDay) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const diffDays = Math.round((now - d) / 86400000);
    if(diffDays === 1) return 'yesterday';
    if(diffDays < 7) return diffDays + 'd ago';
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
 
  function excerpt(text){
    return (text || '').replace(/\n+/g, '  ·  ').trim().slice(0, 90) || 'No additional text';
  }
 
  // ---------- Rendering ----------
  function renderTagFilters(){
    els.tagFilters.innerHTML = '';
    const allChip = document.createElement('button');
    allChip.className = 'tag-chip' + (activeTagFilter === null ? ' active' : '');
    allChip.textContent = 'all';
    allChip.onclick = () => { activeTagFilter = null; renderAll(); };
    els.tagFilters.appendChild(allChip);
 
    TAGS.forEach(t => {
      const chip = document.createElement('button');
      chip.className = 'tag-chip' + (activeTagFilter === t.id ? ' active' : '');
      chip.textContent = t.label;
      chip.onclick = () => { activeTagFilter = (activeTagFilter === t.id ? null : t.id); renderAll(); };
      els.tagFilters.appendChild(chip);
    });
  }
 
  function filteredNotes(){
    let list = notes.slice();
    if(activeTagFilter) list = list.filter(n => n.tag === activeTagFilter);
    if(searchQuery.trim()){
      const q = searchQuery.toLowerCase();
      list = list.filter(n => (n.title + ' ' + n.content).toLowerCase().includes(q));
    }
    list.sort((a,b) => {
      if(a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return b.updatedAt - a.updatedAt;
    });
    return list;
  }
 
  function renderNoteList(){
    const list = filteredNotes();
    els.noteCount.textContent = notes.length ? notes.length + ' notes' : '';
    els.noteList.innerHTML = '';
 
    if(!list.length){
      const empty = document.createElement('div');
      empty.className = 'empty-list';
      empty.textContent = notes.length ? 'Nothing matches that search.' : 'No notes yet — press + to write one.';
      els.noteList.appendChild(empty);
      return;
    }
 
    list.forEach(note => {
      const t = tagInfo(note.tag);
      const card = document.createElement('div');
      card.className = 'note-card' + (note.id === activeId ? ' active' : '');
      card.style.setProperty('--tag-color', t.color);
      card.innerHTML = `
        <div class="row1">
          <div class="title">${escapeHtml(note.title || 'Untitled')}</div>
          ${note.pinned ? '<div class="pin">📌</div>' : ''}
        </div>
        <div class="excerpt">${escapeHtml(excerpt(note.content))}</div>
        <div class="meta"><span>${fmtTime(note.updatedAt)}</span><span>·</span><span>${t.label}</span></div>
      `;
      card.onclick = () => { activeId = note.id; renderAll(); closeSidebarMobile(); };
      els.noteList.appendChild(card);
    });
  }
 
  function renderEditor(){
    const note = getActive();
    if(!note){
      els.editorActions.style.visibility = 'hidden';
      els.tagSelect.innerHTML = '';
      els.editorBody.innerHTML = `
        <div class="empty-state">
          <div class="glyph">§</div>
          <p>Select a note from the list, or press <kbd>+</kbd> to start a new page.</p>
        </div>`;
      return;
    }
    els.editorActions.style.visibility = 'visible';
 
    // tag dots
    els.tagSelect.innerHTML = '';
    TAGS.forEach(t => {
      const dot = document.createElement('div');
      dot.className = 'tag-dot' + (note.tag === t.id ? ' selected' : '');
      dot.style.background = t.color;
      dot.title = t.label;
      dot.onclick = () => { note.tag = t.id; touch(note); renderAll(); };
      els.tagSelect.appendChild(dot);
    });
 
    els.pinBtn.classList.toggle('pinned', !!note.pinned);
 
    els.editorBody.innerHTML = `
      <input type="text" id="titleInput" placeholder="Untitled" value="${escapeAttr(note.title)}">
      <div class="ruled-paper">
        <textarea id="contentInput" placeholder="Start writing…">${escapeHtml(note.content)}</textarea>
      </div>
    `;
 
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
 
    titleInput.addEventListener('input', () => {
      note.title = titleInput.value;
      scheduleTouch(note);
    });
    contentInput.addEventListener('input', () => {
      note.content = contentInput.value;
      scheduleTouch(note);
    });
  }
 
  function renderAll(){
    renderTagFilters();
    renderNoteList();
    renderEditor();
  }
 
  // ---------- Mutations ----------
  function touch(note){
    note.updatedAt = Date.now();
    persist();
    renderNoteList();
  }
 
  function scheduleTouch(note){
    els.saveIndicator.textContent = 'editing…';
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      note.updatedAt = Date.now();
      persist();
      renderNoteList();
      els.saveIndicator.textContent = 'saved ' + fmtTime(note.updatedAt);
    }, 500);
  }
 
  function createNote(){
    const note = {
      id: uid(), title: '', content: '', tag: 'none', pinned: false, updatedAt: Date.now()
    };
    notes.unshift(note);
    activeId = note.id;
    persist();
    renderAll();
    closeSidebarMobile();
    setTimeout(() => {
      const t = document.getElementById('titleInput');
      if(t) t.focus();
    }, 30);
  }
 
  function deleteActive(){
    const note = getActive();
    if(!note) return;
    if(!confirm('Delete "' + (note.title || 'Untitled') + '"? This cannot be undone.')) return;
    notes = notes.filter(n => n.id !== note.id);
    activeId = notes.length ? notes[0].id : null;
    persist();
    renderAll();
  }
 
  function togglePin(){
    const note = getActive();
    if(!note) return;
    note.pinned = !note.pinned;
    touch(note);
    renderEditor();
  }
 
  // ---------- Helpers ----------
  function escapeHtml(str){
    return (str || '').replace(/[&<>]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;' }[c]));
  }
  function escapeAttr(str){
    return escapeHtml(str).replace(/"/g, '&quot;');
  }
 
  function openSidebarMobile(){ els.sidebar.classList.add('open'); els.overlay.classList.add('show'); }
  function closeSidebarMobile(){
    if(window.innerWidth <= 860){
      els.sidebar.classList.remove('open');
      els.overlay.classList.remove('show');
    }
  }
 
  // ---------- Wiring ----------
  els.newNoteBtn.addEventListener('click', createNote);
  els.deleteBtn.addEventListener('click', deleteActive);
  els.pinBtn.addEventListener('click', togglePin);
  els.searchInput.addEventListener('input', (e) => { searchQuery = e.target.value; renderNoteList(); });
  els.menuBtn.addEventListener('click', openSidebarMobile);
  els.overlay.addEventListener('click', closeSidebarMobile);
 
  document.addEventListener('keydown', (e) => {
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'n'){
      e.preventDefault();
      createNote();
    }
  });
 
  window.addEventListener('resize', () => {
    if(window.innerWidth > 860){
      els.sidebar.classList.remove('open');
      els.overlay.classList.remove('show');
    }
  });
 
  load();
  renderAll();
})();