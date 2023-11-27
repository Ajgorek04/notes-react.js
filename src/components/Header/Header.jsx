import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.star}>⭐</div>
            <div className={styles.content}>
                <h1> Write Your Notes </h1>
                <button> Add Your Note </button>
            </div>
            <div className={styles.star}>⭐</div>
        </header>
    );
}
