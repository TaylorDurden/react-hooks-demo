import React, { FC, ReactElement } from 'react';
import { ITodoModel } from '../typings';
import TodoItem from './item';

interface ITodoListProps {
  todoList: ITodoModel[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}


const TodoList:FC<ITodoListProps> = ({
  todoList,
  removeTodo,
  toggleTodo,
}): ReactElement => {
  return (
    <div className="todo-list">
      { todoList.map((todo: ITodoModel) => {
        return (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}></TodoItem>
        )
      })}
    </div>
  );
}

export default TodoList;