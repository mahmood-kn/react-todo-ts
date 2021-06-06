import React, { useRef } from 'react';
import './NewTodo.css';

interface Props {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
    textInputRef.current!.value = '';
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor='todo-text'>Todo Text</label>
      <input type='text' id='todo-text' ref={textInputRef} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewTodo;
