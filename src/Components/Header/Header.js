import React, {useState} from 'react'
import * as S from './Style'
import RC from '../data/Desktop/RC.png'

const Header = () => {

    const [open, setOpen] = useState(false)

    const mobile = () => {
        return(
            <S.MobileContainer>
                <S.MobileMenu>
                    <S.Menu>ABOUT</S.Menu>
                    <S.Menu>RECIPES</S.Menu>
                    <S.Menu>SUBSCRIBE</S.Menu>
                </S.MobileMenu>
            </S.MobileContainer>
        )
    }

    return(
        <S.MomContainer>
            <S.Navigation>
                <S.Figure>
                    <S.Logo src={RC} alt='Logo'/>
                </S.Figure>
                <S.MenuContainer>
                    <S.DesktopMenu>
                        <S.Menu>ABOUT</S.Menu>
                        <S.Menu>RECIPES</S.Menu>
                        <S.Menu>SUBSCRIBE</S.Menu>
                    </S.DesktopMenu>
                </S.MenuContainer>
                <S.Mobile onClick={()=>{setOpen(!open)}}>{open === true ? 'X' : '☰'}</S.Mobile>
                {open && mobile()}
            </S.Navigation>
            <S.HeadingContainer>
                <S.Heading>RECIPES</S.Heading>
            </S.HeadingContainer>
        </S.MomContainer>
    )
}

export default Header