import styles from "./Header.module.css";

export function Header({ addNote }) {
    return (
        <header className={styles.header}>
            <div className={styles.star}>⭐</div>
            <div className={styles.content}>
                <h1> Write Your Notes </h1>
                <button onClick={addNote}>Add Your Note</button>
            </div>
            <div className={styles.star}>⭐</div>
        </header>
    );
}
