import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03c9d7');
  const [currentTheme, setCurrentTheme] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);


  const setMode = (e) => {
    setCurrentTheme(e.target.value);

    localStorage.setItem('themeMode', e.target.value);

    setThemeSettings(false);
  }

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem('colorMode', color);

    setThemeSettings(false);
  }




  const handleClick = (clicked) => {
    const valueInitialState = setIsClicked({...initialState, [clicked]: true})

  }

  const controlClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: false})
  }


  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentTheme, setMode, setColor, themeSettings, setThemeSettings, controlClick}}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
