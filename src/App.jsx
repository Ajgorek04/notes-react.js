import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { AddInput } from "./components/AddInput/AddInput";

function App() {
    const [isAddNoteShown, setIsAddNoteShown] = useState(false);

    function handleAddNoteClick() {
        alert("CLick");
        setIsAddNoteShown(true);
    }

    return (
        <div className="container">
            <Header
                addNote={handleAddNoteClick}
                showAddNote={setIsAddNoteShown}
            />
            {isAddNoteShown && <AddInput />}
        </div>
    );
}

export default App;
