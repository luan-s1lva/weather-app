import styled from "styled-components";

import {
  Button as ButtonMui,
  TextField as TextFieldMUI,
  Typography as TypographyMUI,
  IconButton as IconButtonMUI,
} from "@material-ui/core";

import { Room as RoomIconMUI, Search as SearchMUI } from "@material-ui/icons";

export const Button = styled(ButtonMui)``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextField = styled(TextFieldMUI)``;

export const Typography = styled(TypographyMUI)`
  justify-content: center;
  font-size: 1.5em;
`;

export const RoomIcon = styled(RoomIconMUI)`
  margin-right: 12px;
`;
export const SearchIcon = styled(SearchMUI)``;
export const IconButton = styled(IconButtonMUI)`
  type: submit;
  height: 56px;
`;
