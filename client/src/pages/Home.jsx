import React, { useState } from "react";
import Note from "../components/Note/Note";
import CreateArea from "../components/CreateArea/CreateArea";

const Home = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
        </div>
    )
}

export default Home