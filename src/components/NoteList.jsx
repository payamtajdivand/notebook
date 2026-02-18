import React, { useState } from "react";

function NoteList({ notes, onDeleteNote, onUpdateNote }) {
  const [editingId, setEditingId] = useState(null);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftContent, setDraftContent] = useState("");

  const startEditing = (note) => {
    setEditingId(note.id);
    setDraftTitle(note.title || "");
    setDraftContent(note.content || "");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setDraftTitle("");
    setDraftContent("");
  };

  const saveEditing = () => {
    if (!editingId) return;
    const trimmedTitle = draftTitle.trim();
    const trimmedContent = draftContent.trim();
    if (!trimmedTitle && !trimmedContent) {
      // If both are empty, just cancel editing to avoid empty note.
      cancelEditing();
      return;
    }
    onUpdateNote(editingId, {
      title: trimmedTitle,
      content: trimmedContent,
    });
    cancelEditing();
  };

  if (notes.length === 0) {
    return <p className="empty-state">No notes yet. Start by adding one!</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => {
        const isEditing = editingId === note.id;

        return (
          <article key={note.id} className="note-card">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="note-input"
                  placeholder="Title (optional)"
                  value={draftTitle}
                  onChange={(e) => setDraftTitle(e.target.value)}
                />
                <textarea
                  className="note-textarea"
                  placeholder="Write your note..."
                  rows={3}
                  value={draftContent}
                  onChange={(e) => setDraftContent(e.target.value)}
                />
                <div className="note-actions">
                  <button
                    className="note-button"
                    type="button"
                    onClick={saveEditing}
                  >
                    Save
                  </button>
                  <button
                    className="note-delete-button"
                    type="button"
                    onClick={cancelEditing}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {note.title && <h3 className="note-title">{note.title}</h3>}
                {note.content && (
                  <p className="note-content">{note.content}</p>
                )}
                <div className="note-actions">
                  <button
                    className="note-button"
                    type="button"
                    onClick={() => startEditing(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="note-delete-button"
                    type="button"
                    onClick={() => onDeleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default NoteList;

