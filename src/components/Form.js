
import React from "react";
function Form(props){
    const [note, setNote] = React.useState({title:"", content:""});

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

    return <div>
    <form>
    <input onChange={updateNote} name="title" placeholder="Title" />
    <textarea onChange={updateNote} name="content" placeholder="Take a note..." rows="3" />
    <button onClick={addNote} type="submit"> Add</button>
    </form> </div>;
}





export default Form;
