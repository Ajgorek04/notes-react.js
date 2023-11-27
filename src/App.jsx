import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { AddInput } from "./components/AddInput/AddInput";

function App() {
    const [isAddNoteShown, setIsAddNoteShown] = useState(false);

    function handleViewAddNoteClick() {
        setIsAddNoteShown(true);
    }

    function handleAddNoteClick(e) {
        e.preventDefault();
        alert("wiem");
        setIsAddNoteShown(false);
    }

    return (
        <div className="container">
            <Header
                showNote={handleViewAddNoteClick}
                showAddNote={setIsAddNoteShown}
            />
            {isAddNoteShown && <AddInput addNote={handleAddNoteClick} />}
        </div>
    );
}

export default App;
