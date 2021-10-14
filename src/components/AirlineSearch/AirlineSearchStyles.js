import { makeStyles } from '@mui/styles';
import { orange } from '@mui/material/colors';

const useAirlineStyles = makeStyles({
  paper: {
    height: '240px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  checkBox: {
    '&.Mui-checked': {
      color: orange[800],
    },
  },

  link: {
    color: '#000',
  },

  pageSelect: {
    color: orange[100],
  },
});

export default useAirlineStyles;
