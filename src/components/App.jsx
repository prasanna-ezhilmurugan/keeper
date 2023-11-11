import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(note) {
    setNote((prevValue) => [...prevValue, note]);
    console.log(notes);
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
