import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";


const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "15/04/2022",

  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "18/04/2022",

  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "25/04/2022",

  },
  {
    id: nanoid(),
    text: "This is my new note",
    date: "30/04/2022",

  },
]);

const [searchText, setSearchText] = useState("")

const [darkMode, setDarkMode] = useState(false);

const AddNote = (text) => {
  const date= new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}
const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}

  return <div 
               className="container">
              <Header handleToggleDarkMode={setDarkMode}/>
              <Search handleSearchNote= {setSearchText}/>
              <NotesList 
               notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText)
                    )} 
                 handleAddNote={AddNote}
                handleDeleteNote={deleteNote}/>
           </div>
}

export default App;