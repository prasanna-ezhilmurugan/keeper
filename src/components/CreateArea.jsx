import React from "react";
import { useState } from "react";

function CreateArea(){

    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function handleChange(event){
        const {name , value} = event.target; 

        setNote((prevNote) =>{
            return {
                ...prevNote,
                [name] : value
            }
        });
    }

    function submitNote(event){
        event.preventDefault()
    }

    return (
        <div>
            <form onClick={submitNote}>
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="Title" 
                />
                <textarea 
                    name="content" 
                    onChange={handleChange} 
                    placeholder="Make a note...." 
                    rows="3" 
                    value={note.content}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;