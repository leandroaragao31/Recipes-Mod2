import styled, {createGlobalStyle} from 'styled-components'
import Background from '../data/Desktop/background.png'
import MobileBackground from '../data/Mobile/background.png'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export const MomContainer = styled.section`
    height: 143vh;
    background-image: url(${Background});
    background-position: center;
    border:solid white 20px;
    @media screen and (max-width: 768px){
        height: 94vh;
        background-image: url(${MobileBackground});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: solid white 10px;
    }
`

export const Navigation = styled.div`
    display: flex;
    width: 100%;
    padding: 1.5vw;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width: 768px){
        justify-content: flex-end;
    }
`
export const Figure = styled.figure`
    @media screen and (max-width: 768px){
        display: none
    }
`

export const Logo = styled.img`
    width: 3vw;
    @media screen and (max-width: 1024px){
        width: 4vw;
    }
    @media screen and (max-width: 768px){
        display: none
    }
`
export const MenuContainer = styled.nav`
    width: 40vw;
    @media screen and (max-width: 768px){
        display: none
    }
`

export const DesktopMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    @media screen and (max-width: 768px){
        display: none
    }
`

export const Menu = styled.li`
    font-size: 1.2vw;
    color: #373737;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 10vw;
    &:hover{
        cursor: pointer;
        border: solid;
    }
    @media screen and (max-width: 1024px){
        font-size: 1.5vw;
        &:hover{
            border: none;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 3vw;
    }
    @media screen and (max-width: 425px){
        font-size: 3.5vw;
    }
    @media screen and (max-width: 375px){
        font-size: 3.6vw;
    }

`

export const Mobile = styled.button`
    display: none;
    z-index: 1;
    @media screen and (max-width: 768px){
        display: initial;
        border: none;
        background: none;
        color: #373737;
        font-size: 5vw;
    }
    @media screen and (max-width: 425px){
        font-size: 6vw;
    }
    @media screen and (max-width: 325px){
        font-size: 7vw;
    }
`

export const MobileContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-end;
    top: 0;
    right: 0;
    width: 20vw;
    height: 200px;
    background-color: white;
`

export const MobileMenu = styled.ul`
    display: flex;
    height: 20vh;
    width: 100%;
    align-items: center;
    flex-direction: column;
`

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
`

export const Heading = styled.h1`
    font-size: 10vw;
    position: absolute;
    z-index: 2;
    color: #373737;
    font-weight: 400;
    @media screen and (max-width: 768px){
        font-weight: 500;
        font-size: 8vw;
    }
    @media screen and (max-width: 425px){
        font-size: 10vw;
    }
`