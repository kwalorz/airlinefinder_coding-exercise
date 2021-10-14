import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useState } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: orange[800],
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
  });

  return { darkMode, setDarkMode, theme };
};
export default useTheme;
