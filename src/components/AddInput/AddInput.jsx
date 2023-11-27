import styles from "./AddInput.module.css";

export function AddInput({ addNote }) {
    return (
        <div className={styles.inputDiv}>
            <h1 className={styles.topText}>
                <i>NOTEPAD</i>
            </h1>
            <form onSubmit={addNote}>
                <input type="text" placeholder="Type title of Your note" />
                <textarea
                    cols="30"
                    rows="10"
                    placeholder="Here Type Your Notes"
                ></textarea>
                <button>+</button>
            </form>
        </div>
    );
}
