import kayakLogo from '../../assets/Kayak_logo.svg';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FlightIcon from '@mui/icons-material/Flight';
import KingBedIcon from '@mui/icons-material/KingBed';
import RedeemIcon from '@mui/icons-material/Redeem';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AccountMenu from './AccountMenu';

const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#fff' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={kayakLogo} height='26' alt=''></img>
        <Stack direction='row' spacing={10}>
          <Button variant='text' endIcon={<FlightIcon />}>
            Flights
          </Button>
          <Button variant='text' endIcon={<KingBedIcon />}>
            Hotels
          </Button>
          <Button variant='text' endIcon={<DirectionsBoatIcon />}>
            Cruises
          </Button>
          <Button variant='text' endIcon={<RedeemIcon />}>
            Packages
          </Button>
        </Stack>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
