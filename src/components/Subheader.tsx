import styles from './Subheader.module.css';

export function Subheader() {
  return (
    <div className={styles.wrapper}>
      <div>
        <strong className={styles.createdTasks}>Tarefas Criadas</strong>
        <div className={styles.counter}>0</div>
      </div>
      <div>
        <strong className={styles.tasksDone} >Concluídas</strong>
        <div className={styles.counter}>0</div>
      </div>
    </div>
  )
}