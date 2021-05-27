import React, { FC, ReactElement } from 'react';
import { ITodoModel } from '../typings';

interface ITodoItemProps {
  todo: ITodoModel;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem:FC<ITodoItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) : ReactElement => {
  const { id, content, completed } = todo;
  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{content}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  );
}

export default TodoItem;