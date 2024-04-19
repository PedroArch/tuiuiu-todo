import styles from './Subheader.module.css';
import { ITask } from "../App";

interface SubheaderProps {
  tasks: ITask[]
}

export function Subheader({ tasks }: SubheaderProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <strong className={styles.createdTasks}>Tarefas Criadas</strong>
        <div className={styles.counterTasks}>{tasks.length}</div>
      </div>
      <div>
        <strong className={styles.tasksDone} >Concluídas</strong>
        {tasks.length === 0 ?
          <div className={styles.counterZero}> 0 </div>
          :
          <div className={styles.counter}>{`${tasks.filter(task => task.isChecked === true).length} de ${tasks.length}`}</div>
        }
      </div>
    </div>
  )
}