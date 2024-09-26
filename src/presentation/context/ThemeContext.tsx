import {createContext, PropsWithChildren, useState} from 'react';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';
import React from 'react';
type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        colors: currentTheme === 'light' ? lightColors : darkColors,
        setTheme: setTheme,
        isDark: currentTheme !== 'light',
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
