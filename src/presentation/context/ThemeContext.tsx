import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';
import React from 'react';
import {useColorScheme} from 'react-native';
type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

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
