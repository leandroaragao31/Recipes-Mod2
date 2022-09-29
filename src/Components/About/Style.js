import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const SpoonFig = styled.figure`
    width:50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        overflow: hidden;
    }
    @media screen and (max-width: 425px){
        height: 400px;
    }
    @media screen and (max-width: 375px){
        overflow: hidden;
        height: 300px;
    }
`

export const SpoonImg = styled.img`
    width: 50vw;
    @media screen and (max-width: 768px){
        width: 100vw;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    @media screen and (max-width: 768px){
        width: 100vw;
        margin-top: 3vw;
    }
    @media screen and (max-width: 425px){
        margin-top: 7vw;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 20%;
`

export const Heading = styled.h2`
    color: #373737;
    font-weight: 600;
    font-size: 2vw;
    margin-bottom: 1.5vw;
    @media screen and (max-width:1024px){
        font-size: 2.5vw;
    }
    @media screen and (max-width:768px){
        font-size: 5vw;
        margin-bottom: 2.5vw;
    }
    @media screen and (max-width: 425px){
        font-size: 7vw;
    }
`

export const Decoration = styled.div`
    background-color: #373737;
    width: 3vw;
    height: 5px;
    @media screen and (max-width:1024px){
        height: 3px;
        width: 4vw;
    }
    @media screen and (max-width: 768px){
        width: 8vw;
        height: 5px;
        margin-bottom: 4.5vw;
    }
    @media screen and (max-width: 425px){
        width: 12vw;
        height: 4px;
        margin-bottom: 7.5vw;
    }
`

export const Text = styled.p`
    width: 65%;
    text-align: left;
    line-height: 1.5;
    font-size: 1vw;
    @media screen and (max-width: 1440px){
        font-size: 1.1vw;
    }
    @media screen and (max-width: 1024px){
        font-size: 1.3vw;
    }
    @media screen and (max-width: 768px){
        font-size: 3vw;
        width: 75%;
        margin-bottom: 10vw;
    }
    @media screen and (max-width: 425px){
        font-size: 4vw;
        margin-bottom: 15vw;
    }
    @media screen and (max-width: 320px){
        font-size: 4.5vw;
    }
`