import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js';

const app = document.getElementById('app');
const view = new NotesView(app, {
    onNoteAdd() {
        console.log('Note Added!');    
    },
    onNoteSelect(id) {
        console.log('Note Selected: ' + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle, newBody);
    },
    onNoteDelete(id) {
        console.log('Note Deleted: ' + id);
    }
});

const notes = NotesAPI.getAllNotes();

view.updateNoteList(notes);
view.updateActiveNote(notes[0]);