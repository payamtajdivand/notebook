import React, { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitNote = () => {
    if (!title.trim() && !content.trim()) return;
    onAddNote({ title: title.trim(), content: content.trim() });
    setTitle("");
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitNote();
  };

  const handleTextareaKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitNote();
    }
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
        onKeyDown={handleTextareaKeyDown}
      />
      <button type="submit" className="note-button">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;

