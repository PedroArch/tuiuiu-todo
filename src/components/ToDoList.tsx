import  styles from './ToDoList.module.css'
import {ClipboardText } from '@phosphor-icons/react'
import { ITask } from '../App';
import { Task } from './Task';
import React from 'react';

export interface ToDoProps {
  tasksList: ITask[]
  onToggleTask: (event: React.MouseEvent, id: number) => void
  onRemoveTask: (event: React.MouseEvent, id: number) => void
}


export function ToDoList(props: ToDoProps) {

  return (
    <div className={styles.wrapper}>
      {props.tasksList.length === 0 ?
        (
          <div className={styles.content}>
              <ClipboardText size={56} color='#2cb5bb' />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )
        :
        (
          <div className={styles.contentWithTasks}>
            {props.tasksList.map((task: ITask) =>
            {
              return (
                <Task
                  id={task.id}
                  key={task.id}
                  isChecked={task.isChecked}
                  content={task.content}
                  onHandleToggleTask={props.onToggleTask}
                  onRemoveTask={props.onRemoveTask}
                />
              )
            })}
          </div>
        )
      }
    </div>
  )
}

