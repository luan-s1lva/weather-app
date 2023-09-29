import styled from "styled-components";

import {
    Card as CardMUI,
    CardContent as CardContentMUI
} from '@material-ui/core';

export const Card = styled(CardMUI)`
    width: 50%;
    margin: auto;
`;

export const CardContent = styled(CardContentMUI)`
    background-color: gray;
`;