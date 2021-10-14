import { Fragment, useEffect } from 'react';
import useSearchLogic from './AirlineSearchLogic';
import AirlineProfile from './AirlineProfile';
import fetchJsonp from 'fetch-jsonp';
import useAirlineStyles from './AirlineSearchStyles';

import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Stack,
  Pagination,
} from '@mui/material';

const AirlineSearch = () => {
  const {
    flightData,
    filterOptions,
    pageNumber,
    totalPages,
    flightsPerPage,
    setFlightData,
    handleFlightData,
    handleFilter,
    handlePageChange,
    setTotalPages,
  } = useSearchLogic();

  useEffect(() => {
    const url =
      'https://www.kayak.com/h/mobileapis/directory/airlines/homework';

    async function getData() {
      let res = await fetchJsonp(url, {
        jsonpCallback: 'jsonp',
        jsonpCallbackFunction: 'invalidCallbackFunctionName',
      });
      let data = await res.json();
      setFlightData(data);
      setTotalPages(Math.ceil(data.length / flightsPerPage));
    }
    getData();
  }, []);

  const classes = useAirlineStyles();

  return (
    <Fragment>
      <Typography
        sx={{
          margin: '67px 0px 73px 0px',
          fontSize: '44px',
          fontWeight: 900,
        }}
      >
        Airlines
      </Typography>
      <Typography sx={{ fontWeight: 800, marginBottom: '23px' }}>
        Filter by Alliances
      </Typography>
      <FormGroup row={true} sx={{ marginBottom: '56px' }}>
        {filterOptions.map((option, i) => {
          return (
            <FormControlLabel
              key={`control-${option.id}`}
              control={
                <Checkbox
                  id={option.id}
                  className={classes.checkBox}
                  onChange={handleFilter}
                />
              }
              label={
                <Typography sx={{ fontSize: '14px' }}>{option.name}</Typography>
              }
            />
          );
        })}
      </FormGroup>
      <Stack spacing={2} m={4} justifyContent='center' alignItems='center'>
        <Pagination
          count={totalPages}
          page={pageNumber + 1}
          defaultPage={1}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          shape='rounded'
        />
      </Stack>
      <Grid container spacing={2}>
        {handleFlightData(flightData).map((flight, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} key={`card-${index}`}>
              <AirlineProfile flightData={flight} />
            </Grid>
          );
        })}
      </Grid>
      <Stack spacing={2} m={4} justifyContent='center' alignItems='center'>
        <Pagination
          count={totalPages}
          page={pageNumber + 1}
          defaultPage={1}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          shape='rounded'
        />
      </Stack>
    </Fragment>
  );
};

export default AirlineSearch;
