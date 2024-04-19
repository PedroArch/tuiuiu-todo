import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Task.module.css'
import { Check } from '@phosphor-icons/react'
import React from 'react';

interface TaskProps {
  id: number;
  isChecked: boolean,
  content: string
  onHandleToggleTask: (event: React.MouseEvent, id: number) => void;
  onRemoveTask : (event: React.MouseEvent, id: number) => void;
}

export function Task (props: TaskProps) {

  return (
    <div className={styles.task}>
      <div className={styles.container} onClick={(event) => props.onHandleToggleTask(event, props.id)}>
        <input type='checkbox' />
        <div className={props.isChecked ? styles.checkboxChecked : styles.checkbox}>
          {props.isChecked &&
            <Check size={18} weight="bold" color='white'/>
          }
        </div>
        <p className={props.isChecked ? styles.taskContentChecked : styles.taskContent}>{props.content}</p>
      </div>
      <button
        className={styles.deleteButton}
        title="Remover tarefa"
        onClick={(event) => props.onRemoveTask(event, props.id)}
      >
        <Trash size={30} />
      </button>
    </div>
  )
}