import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import ImageFrame from "../ImageFrame";

const TemperatureStatus = ({ temperatureCondition, temperatureData }) => {
  return (
    <>
      <ImageFrame src={temperatureCondition.icon} />
      <S.Card>
        <S.Typography>{temperatureData.temp_c}℃</S.Typography>
        <S.Typography>{temperatureCondition.text}</S.Typography>
      </S.Card>

      <S.Grid container spacing={2}>
        <S.Grid item xs={6}>
          <S.Paper>
            <S.Container>
              <S.WavesSharp />
            </S.Container>

            <S.Container>
              <S.Typography>{temperatureData.humidity}%</S.Typography>
              <S.Typography>Humidity</S.Typography>
            </S.Container>
          </S.Paper>
        </S.Grid>

        <S.Grid item xs={6}>
          <S.Paper>
            <S.Container>
              <S.Speed />
            </S.Container>

            <S.Container>
              <S.Typography>{temperatureData.wind_kph} KM/H</S.Typography>
              <S.Typography noWrap sx={{ fontSize: 18 }}>
                Wind Speed
              </S.Typography>
            </S.Container>
          </S.Paper>
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
