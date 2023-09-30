import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import ImageFrame from "../ImageFrame";

const TemperatureStatus = ({ temperatureCondition, temperatureData }) => {
  return (
    <>
      <ImageFrame src={temperatureCondition.icon} />
      <S.Typography>{temperatureData.temp_c}℃</S.Typography>
      <S.Typography>{temperatureCondition.text}</S.Typography>
      <br />
      <S.Grid container spacing={2}>
        <S.Grid item xs={6}>
          <S.Paper>
            <S.WavesSharp />
            {temperatureData.humidity}%
          </S.Paper>
          <S.Paper>Humidity</S.Paper>
        </S.Grid>

        <S.Grid item xs={6}>
          <S.Paper>
            <S.Speed />
            {temperatureData.wind_kph} KM/H
          </S.Paper>
          <S.Paper> Wind Speed</S.Paper>
        </S.Grid>
      </S.Grid>
    </>
  );
};

TemperatureStatus.propTypes = {
  temperatureCondition: PropTypes.object.isRequired,
  temperatureData: PropTypes.object.isRequired,
};

export default TemperatureStatus;
