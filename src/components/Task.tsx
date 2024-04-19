import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Task.module.css'
import { Check } from '@phosphor-icons/react'

interface TaskProps {
  id: number;
  isChecked: boolean,
  content: string
  onHandleToggleTask: (id: number) => void
}

export function Task (props: TaskProps) {

  function handleToggleTask() {
    props.onHandleToggleTask(props.id)
  }

  return (
    <label className={styles.task} onClick={handleToggleTask}>
      <div className={styles.container}>
        <input type='checkbox' />
        <div className={props.isChecked ? styles.checkboxChecked : styles.checkbox}>
          {props.isChecked &&
            <Check size={18} weight="bold" color='white'/>
          }
        </div>
        <p className={props.isChecked ? styles.taskContentChecked : styles.taskContent}>{props.content}</p>
      </div>
      <button className={styles.deleteButton} title="Remover tarefa">
        <Trash size={30} />
      </button>
    </label>
  )
}