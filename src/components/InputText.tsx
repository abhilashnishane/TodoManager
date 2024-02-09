import React, {useState} from 'react';
import { Todo } from "./ToDoApp";

interface InputProps {
  getNewTodo: (newTodo: Todo) => void;
}

function InputText({ getNewTodo }: InputProps) {
  const [inputText, setInputText] = useState('');

  const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      const sanitizedInput = inputText.trim();
      if (sanitizedInput.length === 0) return;
      const todoObj: Todo = {
        id: Math.random().toString(),
        text: sanitizedInput,
        isCompleted: false
      }
      getNewTodo(todoObj);
      setInputText('');
    }
  }

  return (
    <input type='text' className='text-input' placeholder='What needs to be done?' value={inputText} onChange={textHandler} onKeyDown={handleKeyDown} autoFocus />
  )
}

export default InputText;