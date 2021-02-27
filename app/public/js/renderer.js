const addNoteBtn = document.getElementById('includeBtn');
const notes = document.getElementById('notes');
const input = document.getElementById('include');
addNoteBtn.addEventListener('click', () => {
    const list = document.createElement('li');
    list.textContent = input.value;
    list.id = 'test';
    list.addEventListener('click', (ev) => {
        const clickList = document.getElementById(ev.toElement.id);
        if (!clickList.classList.contains('dash')) clickList.classList.add('dash');
        else clickList.remove();
    });
    notes.appendChild(list);
    input.value = '';
});

input.addEventListener('keyup', (ev) => {
    ev.preventDefault();
    if (ev.key === 'Enter') {
        addNoteBtn.click();
    }

    if (ev.key === 'Escape') {
        window.setTimeout(() => {
            input.value = '';
        }, 10);
    }
});