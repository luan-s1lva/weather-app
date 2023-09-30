import styled from "styled-components";

import {
  TextField as TextFieldMUI,
  Typography as TypographyMUI,
  Grid as GridMUI,
  Paper as PaperMUI,
} from "@material-ui/core";

import {
  WavesSharp as WavesSharpMUI,
  Speed as SpeedMUI,
} from '@material-ui/icons';

export const WavesSharp = styled(WavesSharpMUI)`
  margin-right: 10px;
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
`;

export const Typography = styled(TypographyMUI)`
  justify-content: center;
  font-size: 2.5em;
  color: white;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
