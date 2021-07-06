import React from "react";
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';
// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}
function Content() {
  return <div>
    <ThemeTogglerButton />
  </div>
}
export default class Context extends React.Component {
  constructor(props) {
    super(props);
    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <ThemeContext.Provider value={this.state}>
        {/* <Toolbar changeTheme={this.toggleTheme} /> */}
        <Content />
      </ThemeContext.Provider>

    );
  }
}