const NOTES = 'notes';

module.exports = {
    getStorageNotes () {
        const notes = window.localStorage.getItem(NOTES);
        return (notes) ? JSON.parse(notes) : [];
    },

    setStorageNotes (notesData) {
        window.localStorage.setItem(NOTES, JSON.stringify(notesData));
    }
}