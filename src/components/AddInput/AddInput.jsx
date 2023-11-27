import { useState } from "react";
import styles from "./AddInput.module.css";

export function AddInput({ addNote }) {
    const [title, setTitle] = useState("");
    const [textContent, setTextContent] = useState("");

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleTextContentChange(e) {
        setTextContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addNote({ title, textContent });
        setTitle("");
    }

    return (
        <div className={styles.inputDiv}>
            <h1 className={styles.topText}>
                <i>NOTEPAD</i>
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type title of Your note"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    cols="30"
                    rows="10"
                    placeholder="Here Type Your Notes"
                    value={textContent}
                    onChange={handleTextContentChange}
                ></textarea>
                <button>+</button>
            </form>
        </div>
    );
}
