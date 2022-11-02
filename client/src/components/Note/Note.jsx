import React from "react";

const Note = ({id, title, content, onDelete}) => {
    const handleClick = () => {
       onDelete(id);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}

export default Note;