import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes";
import CreateArea from "./CreateArea"


function App(){

    function addNote(){

    }
    return(
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map((note)=>{
                return <Note title={note.title} content={note.content} />
            })}
            <Footer />
        </div>        
    )
}

export default App;