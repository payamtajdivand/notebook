## Notebook React App

A simple notebook website built with **HTML**, **CSS**, and **React**.

### Features

- **Add notes**: Type a title (optional) and content, then click **Add Note** or press **Enter** inside the content box.
- **Multiline notes**: Use **Shift + Enter** to insert a new line without submitting.
- **Edit notes**: Click **Edit**, change the title/content, then **Save** or **Cancel**.
- **Delete notes**: Click **Delete** to remove a note.

### Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the shown local URL in your browser (usually `http://localhost:5173`).

### Project structure

- `index.html` – HTML shell that loads the React app.
- `src/main.jsx` – React entry point.
- `src/App.jsx` – Main layout and note state management.
- `src/components/NoteForm.jsx` – Form to create notes (supports Enter / Shift+Enter).
- `src/components/NoteList.jsx` – List of notes with Edit/Delete.
- `src/styles.css` – Styling for the whole app.

