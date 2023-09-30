import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const ImageFrame = ({ src }) => {
  return (
    <>
      <S.Card>
        <S.Image src={src} />
      </S.Card>
    </>
  );
};

ImageFrame.propTypes = {
  src: PropTypes.string,
};

export default ImageFrame;
