import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const SearchBar = () => {
  return (
    <>
      <S.Container>
        <S.RoomIcon />
        <form action="/ToDo" method="GET">
          <S.TextField
            label="Nome da cidade"
            name="cidade"
            variant="outlined"
          />

          <S.IconButton>
            <S.SearchIcon type="submit" />
          </S.IconButton>
        </form>
      </S.Container>
    </>
  );
};

SearchBar.propTypes = {
  cidade: PropTypes.string,
};

export default SearchBar;
