import { Header } from './components/Header'
import { Search } from './components/Search'
import { Subheader } from './components/Subheader'
import './styles.css'
import styles from './App.module.css'
import { ToDoList } from './components/ToDoList'
import React, { useState } from 'react'
import { CloudFog } from '@phosphor-icons/react'

export interface ITask {
  id: number,
  isChecked: boolean,
  content: string
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  console.log(tasks)


  function handleAddTask (content: string) {
    const newTask = {
      id: tasks.length + 1,
      isChecked:false,
      content: content
    }

    const newTasksList = [...tasks, newTask];
    setTasks(newTasksList);

    console.log("DISPARADO ADD")
  }

  function handleToggleTask(event: React.MouseEvent, id: number) {
    event.stopPropagation();

    const updatedTasksList: ITask[] = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    console.log("DISPARADO")

    setTasks(updatedTasksList);
  }

  function handleRemoveTask(event: React.MouseEvent, id: number) {
    event.stopPropagation();

    const updatedTasksList = tasks.filter(task => task.id !== id);

    setTasks(updatedTasksList);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Search onAddTask={handleAddTask}/>
      <Subheader tasks={tasks}/>
      <ToDoList
        tasksList={tasks}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  )
}

export default App
