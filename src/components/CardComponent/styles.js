import styled from "styled-components";

import {
  Card as CardMUI,
  CardContent as CardContentMUI,
} from "@material-ui/core";

export const Card = styled(CardMUI)`
  @media (min-width: 768px) {
    width: 35%;
  }
  width: 80%;
  margin: auto;
  margin-top: 60px;
`;

export const CardContent = styled(CardContentMUI)`
  background-color: #f5d982;
`;
