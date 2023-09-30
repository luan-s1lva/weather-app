import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./styles";
import ImageFrame from "../ImageFrame";

const API_KEY = "0162b4734f2143a0af3200504232909";

const TemperatureStatus = ({ cidade }) => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [temperatureCondition, setTemperatureCondition] = useState([]);

  useEffect(() => {
    getTemperatureData();
  }, []);

  const getTemperatureData = async (cidade) => {
    try {
      axios
        .get(
          "http://api.weatherapi.com/v1/current.json?key="+API_KEY+"&q=Natal",
        )
        .then((response) => {
          setTemperatureData(response.data.current);
          setTemperatureCondition(response.data.current.condition);
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
    <ImageFrame src={temperatureCondition.icon} />
    <S.Typography>{temperatureData.temp_c}℃</S.Typography>
    <S.Typography>{temperatureCondition.text}</S.Typography>
    <br />
    <S.Grid container spacing={2}>
      <S.Grid item xs={6}>
      <S.Paper><S.WavesSharp />{temperatureData.humidity}%</S.Paper>
      <S.Paper>Humidity</S.Paper>
      </S.Grid>
    
      <S.Grid item xs={6}>
      <S.Paper><S.Speed />{temperatureData.wind_kph}</S.Paper>
      <S.Paper>KM/H Wind Speed</S.Paper>
      </S.Grid>
    </S.Grid>
    </>
  );
};

TemperatureStatus.propTypes = {
  cidade: PropTypes.string,
};

export default TemperatureStatus;
