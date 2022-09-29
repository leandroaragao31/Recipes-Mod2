import React from 'react'
import * as S from './Style'
import FB from '../data/Desktop/FB.png'
import TT from '../data/Desktop/TT.png'
import INSTA from '../data/Desktop/INSTA.png'
import PINT from '../data/Desktop/PINT.png'

const Footer = () => {
    return(
        <>
        <S.MomContainer>
            <S.ImageContainer>
                <S.Image src={INSTA} alt='Instagram Logo'/>
                <S.Image src={TT} alt='Twitter Logo'/>
                <S.Image src={FB} alt='Facebook Logo'/>
                <S.Image src={PINT} alt='Pinterest Logo'/>
            </S.ImageContainer>
            <S.MenuContainer>
                <S.DesktopMenu>
                    <S.Menu>ABOUT</S.Menu>
                    <S.Menu>RECIPES</S.Menu>
                    <S.Menu>SUBSCRIBE</S.Menu>
                </S.DesktopMenu>
            </S.MenuContainer>
        </S.MomContainer>
        <S.CreditsContainer>
            <S.Credits>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</S.Credits>
        </S.CreditsContainer>
        </>
    )
}

export default Footer