
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function Form(props){
    const [note, setNote] = React.useState({title:"", content:""});
    const [zoom, setZoom] = React.useState(false);
    function updateNote (event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
        // console.log(note.title, note.content)
       
    };

    function addNote(event){
        event.preventDefault();
        props.addNote(note.title, note.content);
    }

    function showTextArea(event){
        setZoom(true);
        event.preventDefault();
    }
    
    return <div>
    <form className="create-note"> 
    <input onClick={showTextArea} onChange={updateNote} name="title" placeholder="Title" />
    <textarea style={{display : zoom? "block" : "none"}} onChange={updateNote} name="content" placeholder="Take a note..." rows="3" />
    <Zoom in={zoom}>
    <Fab onClick={addNote} type="submit"> <AddIcon /></Fab>
    </Zoom>
    </form> </div>;
}





export default Form;
