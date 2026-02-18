import React, { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onAddNote({ title: title.trim(), content: content.trim() });
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Add a new note</h2>
      <input
        type="text"
        className="note-input"
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note-textarea"
        placeholder="Write your note..."
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="note-button">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;

