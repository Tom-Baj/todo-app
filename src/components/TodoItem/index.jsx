import styles from './style.module.scss';

function TodoItem() {
    return (
        <div className={styles.todoItem}>
            <input type="checkbox" />
            <p>Todo item</p>
            <button>Delete</button>
        </div>
    );
}
export default TodoItem;
