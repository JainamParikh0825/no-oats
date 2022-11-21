export default class NotesAPI{
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem('notes') || "[]");
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(note) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(n => n.id === note.id);

        // Edit / Update
        if (existing) {
            existing.title = note.title;
            existing.body = note.body;
            existing.updated = new Date().toISOString();
        } else {
            note.id = Math.floor(Math.random() * 1000000);
            note.updated = new Date().toISOString();
            notes.push(note);
        }
        
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id !== id);

        localStorage.setItem("notes", JSON.stringify(newNotes));
    }
}