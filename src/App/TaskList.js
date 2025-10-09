// TaskList.js
import styles from './TaskList.module.css';

export function TaskList(props) {
    const done = props.done || false;
    const classes = `${styles.task} ${done ? styles.done : styles.notdone}`;
    
    return (
        <div className={classes}>
            {props.aufgabe}
        </div>
    );
}
