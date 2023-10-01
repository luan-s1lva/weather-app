import styled from "styled-components";

import {
  TextField as TextFieldMUI,
  Typography as TypographyMUI,
  Grid as GridMUI,
  Paper as PaperMUI,
  Card as CardMUI,
} from "@material-ui/core";

import {
  WavesSharp as WavesSharpMUI,
  Speed as SpeedMUI,
} from "@material-ui/icons";

export const WavesSharp = styled(WavesSharpMUI)`
  margin-right: 10px;
`;

export const Card = styled(CardMUI)`
  @media (min-width: 768px) {
    width: 35%;
  }
  width: 50%;
  margin: auto;
  margin-top: 20px;
`;

export const Speed = styled(SpeedMUI)`
  margin-right: 10px;
`;

export const TextField = styled(TextFieldMUI)``;

export const Grid = styled(GridMUI)`
  padding-top: 12px;
`;

export const Paper = styled(PaperMUI)`
  display: flex;
  justify-content: center;
  width: 100%;
  variant: outlined;
`;

export const Typography = styled(TypographyMUI)`
  justify-content: center;
  color: black;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
