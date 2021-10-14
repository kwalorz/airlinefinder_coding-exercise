import { useState } from 'react';

const useSearchLogic = () => {
  const [flightData, setFlightData] = useState([]);
  const [flightFilter, setFlightFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState();

  const flightsPerPage = 12;
  const pagesVisited = pageNumber * flightsPerPage;

  const filterOptions = [
    { name: 'Oneworld', id: 'OW' },
    { name: 'SkyTeam', id: 'ST' },
    { name: 'Star Alliance', id: 'SA' },
  ];

  const handleFlightData = (flightData) => {
    return (
      flightData
        .filter((flight) => {
          // check if filter is on
          if (flightFilter.length === 0) return flight;

          //Apply selected filters if on
          if (flightFilter.length > 0) {
            return flightFilter.indexOf(flight.alliance) >= 0;
          }
        })
        //Pagination
        .slice(pagesVisited, pagesVisited + flightsPerPage)
    );
  };

  const handleFilter = (e) => {
    if (e.target.checked) {
      setFlightFilter((prev) => [...prev, e.target.id]);
      setPageNumber(0);
    }
    if (!e.target.checked) {
      setFlightFilter((prev) => prev.filter((value) => value !== e.target.id));
      setPageNumber(0);
    }
  };

  const handlePageChange = (event, value) => {
    setPageNumber(value - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    flightData,
    flightFilter,
    filterOptions,
    pageNumber,
    totalPages,
    flightsPerPage,
    pagesVisited,
    setFlightData,
    handleFlightData,
    handleFilter,
    handlePageChange,
    setTotalPages,
  };
};

export default useSearchLogic;
