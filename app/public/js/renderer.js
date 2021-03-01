const LocalStorageUtils = require('../../utils/localStorageUtils');

const notes = document.getElementById('notes');
function initNotes () {
    let initNotesData = LocalStorageUtils.getStorageNotes();
    if (!initNotesData.length) return;

    initNotesData = initNotesData.filter(note => !note.exclude);
    for (let i = 0; i < initNotesData.length; i++) {
        createList(initNotesData[i]);
    }
};
initNotes();

function createList (addStorageData) {
    const list = document.createElement('li');
    list.textContent = addStorageData.note;
    list.id = `note-${addStorageData.id}`;
    if (addStorageData.dash) list.classList.add('dash');

    list.addEventListener('click', (ev) => {
        const noteId = ev.toElement.id;
        const clickList = document.getElementById(noteId);
        let data = LocalStorageUtils.getStorageNotes();
        const compareId = noteId.split('note-')[1];
        if (!clickList.classList.contains('dash')) {
            clickList.classList.add('dash');
            data = data.map(item => {
                if (item.id == compareId) {
                    item.dash = true;
                }
                return item;
            });
        } else {
            clickList.remove();
            data = data.map(item => {
                if (item.id == compareId) {
                    item.exclude = true;
                }
                return item;
            });
        }

        LocalStorageUtils.setStorageNotes(data);
    });

    notes.appendChild(list);
}

const addNoteBtn = document.getElementById('includeBtn');
const input = document.getElementById('include');
input.focus();
addNoteBtn.addEventListener('click', () => {
    let storageData = LocalStorageUtils.getStorageNotes();
    const addStorageData = {
        id: storageData.length + 1,
        note: input.value,
        dash: false,
        exclude: false
    };
    createList(addStorageData);

    input.value = '';

    storageData.push(addStorageData);
    LocalStorageUtils.setStorageNotes(storageData);
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
