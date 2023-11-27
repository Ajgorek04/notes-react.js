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
        {
            title: "Title 2",
            content:
                "Cfsaos tam no satatgas ki jakiefass lasf gasgorem asgas gipsumfas nie dzialffa tuta",
        },
        {
            title: "Title 2",
            content:
                "Cfsaos tam no satatgas ki jakiefass lasf gasgorem asgas gipsumfas nie dzialffa tuta",
        },
        {
            title: "Title 2",
            content:
                "Cfsaos tam no satatgas ki jakiefass lasf gasgorem asgas gipsumfas nie dzialffa tuta",
        },
        {
            title: "Title 2",
            content:
                "Cfsaos tam no satatgas ki jakiefass lasf gasgorem asgas gipsumfas nie dzialffa tuta",
        },
    ]);

    function handleViewAddNoteClick() {
        setIsAddNoteShown(true);
    }

    function handleAddNoteClick(noteData) {
        alert(noteData.title);
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
