/* eslint-disable react/self-closing-comp */
import '../gesture-handler';
import React from 'react';
import {Navigator} from './presentation/navigator/Navigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigator></Navigator>
    </ThemeProvider>
  );
};
