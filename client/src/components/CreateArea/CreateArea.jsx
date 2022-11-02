import React, { useState } from "react";
// import axios from 'axios';

const CreateArea = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const submitNote = async (event) => {
        props.onAdd(note);
        // try {
        //     await axios.post("http://localhost:3000", { note });
        // } catch (err) {
        //     console.log(err);
        // }
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    const expand = () => {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <div in={isExpanded}>
                    <button onClick={submitNote}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateArea;
