import styled from 'styled-components'

export const MomContainer = styled.div`
    height: 146vh;
    background-color: #F2F4F1;
    padding-top: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1024px){
        height: 100vh;
    }
    @media screen and (max-width:768px){
        justify-content: start;
        align-items: center;
        height: 175vh;
    }
    @media screen and (max-width: 375px){
        height: 130vh;
    }
`

export const Heading = styled.h2`
    font-size: 3vw;
    color: #373737;
    font-weight: 600;
    @media screen and (max-width: 1024px){
        font-size: 4vw;
    }
    @media screen and (max-width: 768px){
        font-size: 7vw;
        margin-top: 2vw;
    }
    @media screen and (max-width: 425px){
        font-size: 9vw;
    }
`

export const Decoration = styled.div`
    background-color: #373737;
    margin-top: 2vw;
    margin-bottom: 4vw;
    width: 6.5vw;
    height: 4px;
    @media screen and (max-width: 768px){
        width: 18vw;
        height: 5px;
        margin-top: 1vw;
    }
`

export const MainContainer = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        margin-bottom: 1.5vw;
    }
`

export const ImageContainer = styled.figure`
    width: 25vw;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow: hidden;
    @media screen and (max-width:768px){
        width: 40vw;
        height: 200px
    }
    @media screen and (max-width: 425px){
        width: 60vw;
    }
    @media screen and (max-width: 375px){
        height: 150px;
    }
`

export const Image = styled.img`
    width: 25vw;
    @media screen and (max-width:768px){
        width:50vw;
    }
    @media screen and (max-width: 425px){
        width: 65vw;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 320px;
    align-items: center;
    background-color: white;
    box-shadow: 0px 7px 6px #00000029;
    @media screen and (max-width: 1024px){
        height: 220px;
    }
    @media screen and (max-width: 768px){
        height: 200px;
    }
    @media screen and (max-width: 375px){
        height: 150px;
    }
`

export const InfoDecoration = styled.div`
    background-color: #373737;
    width: 3vw;
    height: 4px;
    @media screen and (max-width: 768px){
        height: 5px;
        width: 5vw;
    }
    @media screen and (max-width: 425px){
        width: 6.5vw;
    }
`

export const Text = styled.h2`
    color: #373737;
    font-weight: 500;
    font-size: 1.5vw;
    margin-top: 1vw;
    @media screen and (max-width: 1024px){
        font-size: 2vw;
    }
    @media screen and (max-width: 768px){
        font-size: 3vw;
        margin-top: 2vw;
    }
    @media screen and (max-width: 425px){
        font-size: 5vw;
    }
`