import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./styles";
import TemperatureStatus from "../TemperatureStatus";

const API_KEY = "0162b4734f2143a0af3200504232909";

const SearchBar = () => {
  const [cidade, setCidade] = useState("");
  const [temperatureData, setTemperatureData] = useState([]);
  const [temperatureCondition, setTemperatureCondition] = useState([]);

  const getTemperatureData = (cidade) => {
    try {
      axios
        .get(
          "http://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + cidade,
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
  }

  return (
    <>
      <S.Container>
        <S.RoomIcon />
        <S.TextField
            label="Nome da cidade"
            name="cidade"
            variant="outlined"
            value={cidade}
            onChange={event => setCidade(event.target.value)}
          />

          <S.Button onClick={() => getTemperatureData(cidade)}>
            <S.SearchIcon />
          </S.Button>
      </S.Container>
      <TemperatureStatus
        temperatureCondition={temperatureCondition}
        temperatureData={temperatureData}
      />
    </>
  );
};

SearchBar.propTypes = {
  cidade: PropTypes.string,
};

export default SearchBar;
