import React, {FC, ReactElement, useRef } from 'react';
import { ITodoModel } from '../typings';


interface ITodoInputProps {
  handleAddTodo: (todo: ITodoModel) => void;
  todoList: ITodoModel[];
}

const TodoInput:FC<ITodoInputProps> = ({
  handleAddTodo,
  todoList,
}:ITodoInputProps ) : ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null); //默认值是null
  const addItem = (): void => {
    const inputValue: string = inputRef.current!.value.trim();
    if(inputValue.length){
      const isAlreadyExisted = todoList.find(todo => todo.content === inputValue);
      if(isAlreadyExisted){
        alert('Existed!');
        return;
      }
      inputRef.current!.value = '';
      handleAddTodo({
        id: new Date().getTime(),
        content: inputValue,
        completed: false,
      });
    }
  }

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入待办项" ref={inputRef} />
      <button onClick={addItem}>添加</button>
    </div>
  );
}

export default TodoInput;