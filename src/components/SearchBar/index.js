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
          "https://api.weatherapi.com/v1/current.json?key=" +
            API_KEY +
            "&q=" +
            cidade,
          { headers: { Authorization: "Bearer" } },
        )
        .then((response) => {
          setTemperatureData(response.data.current);
          setTemperatureCondition(response.data.current.condition);
        })
        .catch((error) => {
          alert(
            "Ocorreu um erro. Por favor volte mais tarde ou contate o desenvolvedor responsável.",
          );
        });
    } catch (error) {
      alert("Ocorreu um erro. Por favor volte mais tarde.");
    }
  };

  return (
    <>
      <S.Card>
        <S.Container>
          <S.RoomIcon />
          <S.TextField
            label="City Name"
            name="cidade"
            variant="outlined"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />

          <S.Button onClick={() => getTemperatureData(cidade)}>
            <S.SearchIcon />
          </S.Button>
        </S.Container>
      </S.Card>
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
