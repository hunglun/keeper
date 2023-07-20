// Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Done from '@mui/icons-material/Done';
function Note(props){
    function deleteNote(event){
        props.onDelete(props.id);
        // event.preventDefault(); 
    }
    return (
        <div className="note" style={{ 
            background : props.done ? "#e6e6e6" : "white",
            textDecoration: props.done ? "line-through" : null}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.onMarkDone(props.id)} > <Done /> </button>
            <button onClick={deleteNote} > <DeleteIcon /> </button>
        </div>
    );
}

export default Note;