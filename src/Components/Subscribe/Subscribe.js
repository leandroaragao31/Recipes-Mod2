import React from 'react'
import * as S from './Style'

const Subscribe = () => {
    return(
        <S.MomContainer>
            <S.Heading>SUBSCRIBE</S.Heading>
            <S.Text>Sign up for newsletter</S.Text>
            <S.Input placeholder='Your Email'/>
            <S.Button>SUBMIT</S.Button>
        </S.MomContainer>
    )
}

export default Subscribe