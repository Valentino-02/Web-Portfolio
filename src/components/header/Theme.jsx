import { React, useState } from "react";

const lightTheme = {
  "--color-bg": "rgb(100, 50, 50)",
  "--color-bg-variant": "rgb(85, 30, 30)",
  "--color-primary": "rgb(50, 11, 32)",
  "--color-primary-variant": "rgb(50, 17, 55)",
  "--color-white": "rgb(255, 2, 255)",
  "--color-light": "rgb(110, 104, 10)",
};
const darkTheme = {
  "--color-bg": "rgb(196, 5, 5)",
  "--color-bg-variant": "rgb(85, 3, 3)",
  "--color-primary": "rgb(5, 211, 32)",
  "--color-primary-variant": "rgb(5, 172, 55)",
  "--color-white": "rgb(255, 255, 255)",
  "--color-light": "rgb(110, 104, 104)",
};

const Theme = () => {
  const [currentTheme, setTheme] = useState("light");

  const applyTheme = (nextTheme) => {
    const theme = nextTheme === "dark" ? lightTheme : darkTheme;
    theme.map((key) => {
      const value = theme[key];
      console.log(value);
      document.documentElement.style.setProperty(key, value);
    });
  };

  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div>
      <h1>{currentTheme === "light" ? "Light theme" : "Dark theme"}</h1>
      <button onClick={onClick}>Toggle theme</button>
    </div>
  );
};

export default Theme;
