import React, { useState } from "react";
import NoteForm from "./components/NoteForm.jsx";
import NoteList from "./components/NoteList.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes((prev) => [
      {
        id: Date.now(),
        ...note,
      },
      ...prev,
    ]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handleUpdateNote = (id, updatedFields) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updatedFields,
            }
          : note
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notebook</h1>
        <p>Capture and organize your notes quickly.</p>
      </header>
      <main className="app-main">
        <section className="note-form-section">
          <NoteForm onAddNote={handleAddNote} />
        </section>
        <section className="note-list-section">
          <NoteList
            notes={notes}
            onDeleteNote={handleDeleteNote}
            onUpdateNote={handleUpdateNote}
          />
        </section>
      </main>
    </div>
  );
}

export default App;

