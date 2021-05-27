import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';
import TodoInput from './Input';
import TodoList from './List';
import { todoReducer } from './reducer';
import { ACTION_TYPE, IState, ITodoModel } from './typings.d';

const initialState: IState = {
  todoList: []
};

function lazyInit(initialTodoList: ITodoModel[]):IState{
  return {
    todoList: initialTodoList,
  }
}

const TodoComponent:FC = ():ReactElement => {
  // const [ todoList, setTodoList] = useState<ITodoModel[]>([]); 
  const [state, dispatch] = useReducer(todoReducer, [], lazyInit); //惰性初始化，只有在用到useReducer的时候才会初始化state

  useEffect(() => {
    console.log(state.todoList);
    const localTodoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    dispatch({
      type: ACTION_TYPE.GET_LOCAL_TODOLIST,
      payload: localTodoList
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todoList));
  }, [state.todoList]);// state.todoList每次有变动就会执行localStorage的存储

  // useCallback保持函数引用不变
  const handleAddTodo = useCallback((todo: ITodoModel) => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    });
  }, []);// [] 依赖列表为空

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    });
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    });
  }, []);

  return (
    <div className="todo-component">
      <TodoInput handleAddTodo={handleAddTodo} todoList={state.todoList}></TodoInput>
      <TodoList todoList={state.todoList} toggleTodo={toggleTodo} removeTodo={removeTodo}></TodoList>
    </div>
  );
}

export default TodoComponent;