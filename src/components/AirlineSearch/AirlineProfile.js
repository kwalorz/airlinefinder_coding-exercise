import { useState } from 'react';
import { Paper, Stack, Box, Typography, Link, Fade } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import useAirlineStyles from './AirlineSearchStyles';

const AirlineProfile = ({ flightData }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover((prev) => !prev);

  const condenseWebsite = (str) => {
    const removeHttp = str.split('https://');
    const newStr = removeHttp.filter((str) => str !== '').toString();
    const removeParams = newStr.split('/')[0];
    return removeParams;
  };

  const checkAlliance = (alliance) => {
    if (alliance === 'none') return '';
    if (alliance === 'OW') return 'Oneworld';
    if (alliance === 'ST') return 'SkyTeam';
    if (alliance === 'SA') return 'Star Alliance';
    return;
  };

  const classes = useAirlineStyles();

  return (
    <Paper
      className={classes.paper}
      elevation={4}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Stack direction='row' justifyContent='center' alignItems='center'>
        {flightData.url ? (
          <img src={flightData.logoUrl} alt='' />
        ) : (
          <FlightIcon fontSize='large' />
        )}
        <Stack
          ml={2}
          justifyContent='center'
          height={hover ? '100%' : '50px'}
          sx={{ transition: 'height .5s' }}
        >
          <Typography variant='subtitle1' gutterBottom sx={{ fontWeight: 800 }}>
            {flightData.name}
          </Typography>
          <Fade timeout={500} in={hover}>
            <Box sx={{ display: `${hover ? 'block' : 'none'}` }}>
              <Typography variant='subtitle2'>
                {checkAlliance(flightData.alliance)}
              </Typography>
              <Typography variant='subtitle2'>{flightData.phone}</Typography>
              <Link
                href={flightData.site}
                target='_blank'
                rel='noopener'
                rel='noreferrer'
                variant='subtitle2'
                underline='none'
              >
                {condenseWebsite(flightData.site)}
              </Link>
            </Box>
          </Fade>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AirlineProfile;
