// Tasklist.js
import { useState } from 'react';
import styles from './TaskList.module.css';

export function TaskList(props) {
    const [isDone, setIsDone] = useState(props.done || false);
    const [showDescription, setShowDescription] = useState(false);
    
    const classes = `${styles.task} ${isDone ? styles.done : styles.notdone}`;
    
    const handleCheckboxChange = () => {
        if (!isDone) {
            setIsDone(true);
        }
    };
    
    const handleTaskClick = () => {
        setShowDescription(!showDescription);
    };
    
    const handleCheckboxClick = (e) => {
        e.stopPropagation(); // Verhindert, dass der Task-Click ausgelöst wird
    };
    
    return (
        <div className={classes} onClick={handleTaskClick} style={{ cursor: 'pointer' }}>
            <div className={styles.taskHeader}>
                <span className={styles.taskTitle}>
                    {props.aufgabe}
                </span>
                
                <div onClick={handleCheckboxClick} style={{ padding: '10px', margin: '-10px' }}>
                    <input 
                        type="checkbox" 
                        checked={isDone}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                        disabled={isDone}
                    />
                </div>
            </div>
            
            {/* Beschreibung mit zusätzlichem DIV für Grid-Trick */}
            {props.description && (
                <div className={`${styles.description} ${showDescription ? styles.visible : styles.hidden}`}>
                    <div>{props.description}</div>
                </div>
            )}
        </div>
    );
}
