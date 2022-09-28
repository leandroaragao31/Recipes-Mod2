import React from 'react'
import * as S from './Style'
import Cake from '../data/Desktop/cake.png'
import Pizza from '../data/Desktop/pizza.png'
import Smoothie from '../data/Desktop/smoothie.png'


const Latest = () => {
    return(
        <S.MomContainer>
            <S.Heading>LATEST RECIPES</S.Heading>
            <S.Decoration></S.Decoration>
            <S.MainContainer>
                <S.Main>
                    <S.ImageContainer>
                        <S.Image src={Cake} alt='Cake'/>
                    </S.ImageContainer>
                    <S.Info>
                        <S.InfoDecoration></S.InfoDecoration>
                        <S.Text>Red Velvet Cake</S.Text>
                    </S.Info>
                </S.Main>
                <S.Main>
                    <S.ImageContainer>
                        <S.Image src={Pizza} alt='Cake'/>
                    </S.ImageContainer>
                    <S.Info>
                        <S.InfoDecoration></S.InfoDecoration>
                        <S.Text>Margherita Pizza</S.Text>
                    </S.Info>
                </S.Main>
                <S.Main>
                    <S.ImageContainer>
                        <S.Image src={Smoothie} alt='Cake'/>
                    </S.ImageContainer>
                    <S.Info>
                        <S.InfoDecoration></S.InfoDecoration>
                        <S.Text>Peanut Smoothie</S.Text>
                    </S.Info>
                </S.Main>
            </S.MainContainer>
        </S.MomContainer>
    )
}

export default Latest