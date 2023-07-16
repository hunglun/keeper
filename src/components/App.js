//1. Create a new React app. X
//2. Create a App.jsx component. X
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>. X
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.X
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.X
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

// import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
  return (
    <div className="App">
      <Header className="App-header">
      </Header>
      {notes.map(note => (
      <Note key={note.key} title={note.title} content={note.content} />))}
      <Footer />
    </div>
  );
}

export default App;
