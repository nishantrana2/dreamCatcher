import React from "react";
import { useState, useEffect } from "react";
import { Box, Button } from "../../../styles";
import Card from "./Card/Card";

const JobCards = ({ data, title, pageLimit, dataLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }
  const dataHandler = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  const groupHandler = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns={["1fr", " 1fr 1fr 1fr ", "1fr 1fr 1fr"]}
        gridGap={3}
      >
        {dataHandler().map((data, index) => {
          return <Card key={data.id} post={data} />;
        })}
      </Box>

      <Box mt={2} type="row" justifyContent="space-around">
        <Button onClick={goToPreviousPage}>prev</Button>

        {groupHandler().map((pageNumber, index) => (
          <Button key={index} onClick={changePage}>
            <span>{pageNumber}</span>
          </Button>
        ))}

        <Button onClick={goToNextPage}>next</Button>
      </Box>
    </Box>
  );
};

export default JobCards;
