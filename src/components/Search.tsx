import { useState } from 'react';
import styles from './Search.module.css';
import { PlusCircle } from '@phosphor-icons/react';

interface SearchProps {
  onAddTask: (content: string) => void
}

export function Search({ onAddTask }: SearchProps ) {
  const [inputText, setInputText] = useState('');

  function handleAddTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(inputText.trim() !== '') {
      onAddTask(inputText)

      setInputText('')
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleAddTask}
    >
      <input
        type='text'
        value={inputText}
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setInputText(event.target.value)}
      />
      <button type="submit">
        <span>Criar <PlusCircle size={16} weight={"bold"}/></span>
      </button>
    </form>
  )
}