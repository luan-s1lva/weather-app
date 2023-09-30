import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./styles";

const API_KEY = "0162b4734f2143a0af3200504232909";

const TemperatureStatus = ({ cidade }) => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    getTemperatureData();
  }, []);

  const getTemperatureData = async (cidade) => {
    try {
      axios
        .get(
          "http://api.weatherapi.com/v1/current.json?key=0162b4734f2143a0af3200504232909&q=Natal",
        )
        .then((response) => {
          setTemperatureData((response.data.current));
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      alert("Deu erro");
    }
  };

  return (
    <>
    {/* {temperatureData} */}
    </>
  );
};

TemperatureStatus.propTypes = {
  cidade: PropTypes.string,
};

export default TemperatureStatus;
