# Note Taking App

A simple and intuitive note-taking application built with React, Redux, and TailwindCSS. This app allows users to create, view, update, and delete notes (referred to as "pastes"). It also supports sharing notes via unique URLs.

## Features

- **Create Notes**: Add new notes with a title and content.
- **View Notes**: View the details of a specific note.
- **Update Notes**: Edit existing notes.
- **Delete Notes**: Remove notes from the list.
- **Search Notes**: Search for notes by title.
- **Share Notes**: Generate a shareable link for each note.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark Mode**: Supports dark mode for better user experience.

## Tech Stack

- **Frontend**: React, React Router, TailwindCSS
- **State Management**: Redux Toolkit
- **Notifications**: React Toastify
- **Build Tool**: Vite
- **CSS Framework**: TailwindCSS

## Project Structure

```
react-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Nav.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Paste.jsx
│   │   └── ViewPaste.jsx
│   ├── redux/
│   │   └── pasteSlice.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── store.js
│   ├── index.css
│   └── output.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/note-taking-app.git
   cd note-taking-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Usage

1. Navigate to the home page to create a new note.
2. Use the "Pastes" page to view all notes.
3. Click on a note to view its details or edit it.
4. Use the search bar to filter notes by title.
5. Share a note by copying its unique URL.

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Pastes Page
![Pastes Page](https://via.placeholder.com/800x400?text=Pastes+Page)

### View Paste
![View Paste](https://via.placeholder.com/800x400?text=View+Paste)

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Vite](https://vitejs.dev/)
