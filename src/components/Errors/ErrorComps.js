import { useState, useEffect } from "react";
import { Box, H6 } from "../../styles";
import Cards from "./Cards/Cards";
import { useHistory } from "react-router-dom";
import Filteration from "./Filteration";
import Loader from "react-loader-spinner";

const ErrorComps = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [filter, setFilter] = useState({
    env: undefined,
    code: undefined,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let url = `https://api-flash.supplycompass.com/ukyzGAndExrbNdU/json`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          return res.json().then((data) => {
            history.replace("/");

            throw new Error("error");
          });
        }
      })
      .then((data) => {
        console.log(data);
        let errorData = data;
        if (filter.code || filter.env) {
          errorData = errorData.filter(
            (data) =>
              data.environment === filter.env || data.code === filter.code
          );
        }
        setErrors(errorData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [filter]);

  const filterHandler = (newEnv, newCode) => {
    setFilter({
      env: newEnv,
      code: newEnv,
    });
  };

  return isLoading ? (
    <Box
      type="row"
      justifyContent="center"
      alighItems="center"
      height={"100vh"}
    >
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </Box>
  ) : (
    <Box p={8}>
      <Box type="row" mb={4}>
        {" "}
        <H6 m={0} mb={2} color="white">
          Errors
        </H6>
        <Filteration filterHandler={filterHandler} />
      </Box>
      <Cards data={errors} title="Errors" pageLimit={5} dataLimit={21} />
    </Box>
  );
};

export default ErrorComps;
