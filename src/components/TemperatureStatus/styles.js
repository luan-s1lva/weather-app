import styled from "styled-components";

import {
  TextField as TextFieldMUI,
  Typography as TypographyMUI,
  Grid as GridMUI,
  Paper as PaperMUI,
} from "@material-ui/core";

export const TextField = styled(TextFieldMUI)``;

export const Grid = styled(GridMUI)`
  padding-top: 12px;
`;

export const Paper = styled(PaperMUI)``;

export const Typography = styled(TypographyMUI)`
  justify-content: center;
  font-size: 1.5em;
  color: red;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
