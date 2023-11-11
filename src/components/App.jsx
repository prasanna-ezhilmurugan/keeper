import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(note) {
    setNote((prevValue) => [...prevValue, note]);
  }
  function deleteNote(index) {
    setNote(() => {
      return notes.filter((note) => {
        return note.id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content}
            onDel={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
