import React from "react";
import PropTypes from "prop-types";
import * as S from './styles';

const SearchBar = ({ cidade }) => {
    return(
        <>
            <S.RoomIcon />
            <S.TextField></S.TextField>
        </>
    );
}

SearchBar.propTypes = {
    cidade: PropTypes.string,
};

export default SearchBar;