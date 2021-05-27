import React, { useContext } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

export const ThemeContext = React.createContext(themes.light);

function ToolBar(props:any) {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground}}>
      I am styled by theme context!
    </button>
  );
}

export default ToolBar;