import { Fragment, useEffect, useState, useRef } from 'react';
import {
  Button,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Typography,
  Menu,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LogoutIcon from '@mui/icons-material/Logout';

const AccountMenuItems = [
  {
    menuItem: 'Profile',
    icon: <AccountBoxIcon />,
  },
  { menuItem: 'My Trips', icon: <AirportShuttleIcon /> },
  {
    menuItem: 'Logout',
    icon: <LogoutIcon />,
  },
];

const AccountMenu = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(accountOpen);
  const handleToggle = () => {
    setAccountOpen((prev) => !prev);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setAccountOpen(false);
  };

  const handleListKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setAccountOpen(false);
    } else if (e.key === 'Escape') {
      setAccountOpen(false);
    }
  };

  useEffect(() => {
    if (prevOpen.current === true && accountOpen === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = accountOpen;
  }, [accountOpen]);
  return (
    <Fragment>
      <Button
        ref={anchorRef}
        variant='text'
        endIcon={<AccountCircleIcon />}
        onClick={handleToggle}
      >
        Sign in
      </Button>
      <Menu
        open={accountOpen}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={accountOpen} onKeyDown={handleListKeyDown}>
            {AccountMenuItems.map(({ menuItem, icon }, index) => {
              return (
                <MenuItem onClick={handleClose} key={`account-item-${index}`}>
                  {icon}
                  <Typography sx={{ ml: '10px' }}>{menuItem}</Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </ClickAwayListener>
      </Menu>
    </Fragment>
  );
};

export default AccountMenu;
