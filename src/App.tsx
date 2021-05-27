import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoLIst from './components/TodoList';
import UseStateHook from './hooks/useState';
import ToolBar, { ThemeContext, themes } from './hooks/useContext';
import Counter from './hooks/useReducer';

function App() {
  return (
    <div className="App">
      <TodoLIst />
      <br />
      {/* <UseStateHook></UseStateHook> */}
      <ThemeContext.Provider value={themes.dark}>
        <ToolBar />
      </ThemeContext.Provider>
      <br />
      <Counter initialCount={0}></Counter>
    </div>
  );
}

export default App;
