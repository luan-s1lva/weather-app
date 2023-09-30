import styled from "styled-components";

import {
    Card as CardMUI,
    CardMedia as CardMediaMUI,
} from "@material-ui/core";

export const Image = styled.img`
    height: 100px;
  margin: auto;
  display: flex;
`;

export const Card = styled(CardMUI)`
@media (min-width: 768px) {
    width: 35%;
  }
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardMedia = styled(CardMediaMUI)`
    height: 140px;
`;