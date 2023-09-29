import React from "react";
import * as S from './styles';

const CardComponent = ({ children }) => {
    return(
        <>
        <S.Card>
            <S.CardContent>
                {children}
            </S.CardContent>
        </S.Card>
        </>
    );
}

export default CardComponent;