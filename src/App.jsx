import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { AddInput } from "./components/AddInput/AddInput";

function App() {
    const [isAddNoteShown, setIsAddNoteShown] = useState(false);

    const [notes, setNotes] = useState([
        {
            title: "Title 1",
            content: "Cos tam notatki jakies lorem ipsum nie dziala tuta",
        },
    ]);

    function handleViewAddNoteClick() {
        setIsAddNoteShown(true);
    }

    function handleAddNoteClick(noteData) {
        setNotes((prevNotes) => [
            ...prevNotes,
            { title: noteData.title, content: noteData.textContent },
        ]);
        setIsAddNoteShown(false);
    }

    function handleDeleteButton(index) {
        setNotes((prevNotes) => {
            const newNotes = [...prevNotes];
            newNotes.splice(index, 1);
            return newNotes;
        });
    }

    return (
        <div className="container">
            <Header
                showNote={handleViewAddNoteClick}
                showAddNote={setIsAddNoteShown}
            />
            {isAddNoteShown && <AddInput addNote={handleAddNoteClick} />}
            <div className="noteContainer">
                {notes.map((note, index) => (
                    <div className="noteDivs" key={index}>
                        <h1>{note.title}</h1>
                        <hr />
                        <p>{note.content}</p>
                        <button
                            onClick={() => handleDeleteButton(index)}
                            className="delBtn"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
