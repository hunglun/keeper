// Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";
function Note(props){
    function deleteNote(event){
        props.onDelete(props.id);
        event.preventDefault(); 
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote} > DELETE</button>
        </div>
    );
}

export default Note;