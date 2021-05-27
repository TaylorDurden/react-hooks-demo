export interface ITodoModel {
  id: number;
  content: string;
  completed: boolean;
}

export interface IState {
  todoList: ITodoModel [];
}

export interface IAction {
  type: ACTION_TYPE;
  payload: ITodoModel | ITodoModel[] | number; // todo entity or todo id
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  GET_LOCAL_TODOLIST = 'localTodoList',
}