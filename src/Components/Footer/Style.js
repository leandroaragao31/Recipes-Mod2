import styled from 'styled-components'

export const MomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F4F1;
    padding-right: 5vw;
    padding-left: 5vw;
    height: 250px;
    @media screen and (max-width: 1024px){
        height: 180px;
    }
    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
        justify-content: center;
        height: 350px;
    }
    @media screen and (max-width: 375px){
        height: 300px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    @media screen and (max-width: 1024px){
        width: 23%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
    }
    @media screen and (max-width: 425px){
        width: 75%;
    }
    @media screen and (max-width: 375px){
        width: 80%;
    }
`

export const Image = styled.img`
    width: 3.5vw;
    @media screen and (max-width: 1024px){
        width: 4vw;
    }
    @media screen and (max-width: 768px){
        width: 6.7vw;
    }
    @media screen and (max-width: 425px){
        width: 12vw;
    }
    @media screen and (max-width: 375px){
        width: 13vw;
    }
`

export const MenuContainer = styled.div`
    width: 30%;
    height: 40%;
    @media screen and (max-width: 1024px){
        width: 34%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
        margin-bottom: 2.5vw;
    }
    @media screen and (max-width: 425px){
        width: 75%;
    }
`

export const DesktopMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        align-items: center;
    }
`

export const Menu = styled.li`
    color: #373737;
    font-size: 1.2vw;
    @media screen and (max-width: 1024px){
        font-size: 1.6vw;
    }
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
    }
    @media screen and (max-width: 425px){
        font-size: 5vw;
    }
    @media screen and (max-width: 375px){
        font-size: 5.5vw;
    }
`

export const CreditsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #446061;
    height: 50px;
    @media screen and (max-width: 425px){
        height: 35px;
    }
`

export const Credits = styled.p`
    color: #FFFFFF;
    opacity: 0.5;
    font-size: 1.1vw;
    @media screen and (max-width: 425px){
        font-size: 2vw;
    }
    @media screen and (max-width: 375x){
        font-size: 2.5vw;
    }
`