import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import useTheme from './Theme';
import Navbar from './components/Navbar/Navbar';
import AirlineSearch from './components/AirlineSearch/AirlineSearchUI';

function App() {
  const { darkMode, setDarkMode, theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='lg'>
        <AirlineSearch />
      </Container>
    </ThemeProvider>
  );
}

export default App;
