import styles from './style.module.scss';

function TodoTitle() {
    return (
        <div className={styles.titleContainer}>
            <h1 className="title">To-Do List</h1>
        </div>
    );
}

export default TodoTitle;
