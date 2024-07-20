import React, { useState } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import './styles/App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (note) => {
    setNotes(notes.map(n => (n.id === note.id ? note : n)));
  };

  const startEditing = (note) => {
    setEditingNote(note);
  };

  return (
    <div className="App">
      <h1>Notebook</h1>
      <NoteForm addNote={addNote} editNote={editNote} editingNote={editingNote} setEditingNote={setEditingNote} />
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} note={note} deleteNote={deleteNote} startEditing={startEditing} />
        ))}
      </div>
    </div>
  );
};

export default App;
