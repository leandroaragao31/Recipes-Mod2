import styled from 'styled-components'

export const MomContainer = styled.div`
    background-color: #DFE4DE;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 425px){
        height: 45vh;
    }
    @media screen and (max-width: 375px){
        height: 40vh;
    }
    @media screen and (max-width: 320px){
        height: 35vh;
    }
`

export const Heading = styled.h2`
    color: #373737;
    font-weight: 600;
    font-size: 2vw;
    margin-bottom: 0.5vw;
    @media screen and (max-width: 1024px){
        font-size: 3vw;
    }
    @media screen and (max-width: 768px){
        font-size: 6vw;
    }
    @media screen and (max-width: 425px){
        font-size: 10vw;
    }
    @media screen and (max-width: 320px){
        font-size: 12vw;
    }
`

export const Text = styled.h3`
    color: #373737;
    font-size: 1.5vw;
    font-weight: 400;
    margin-bottom: 2vw;
    @media screen and (max-width: 1024px){
        font-size: 2vw;
    }
    @media screen and (max-width: 768px){
        font-size: 5vw;
        font-weight: 300;
    }
    @media screen and (max-width: 425px){
        font-size: 9vw;
    }
    @media screen and (max-width: 320px){
        font-size: 10vw;
    }
`

export const Input = styled.input`
    margin-bottom: 2vw;
    width: 35%;
    border: none;
    height: 70px;
    &::placeholder{
       padding-left: 2vw;
       font-size: 1vw;
       font-weight: 400;
    }
    @media screen and (max-width: 1024px){
        width: 45%;
        height: 60px;
        &::placeholder{
            font-size: 1.3vw;
        }
    }
    @media screen and (max-width: 768px){
        width: 85%;
        height: 50px;
        &::placeholder{
            font-size: 2vw;
        }
    }
    @media screen and (max-width: 425px){
        width: 90%;
        &::placeholder{
            font-size: 4vw;
        }
    }
    @media screen and (max-width: 320px){
        height: 40px;
        &::placeholder{
            font-size: 5vw;
        }
    }
`

export const Button = styled.button`
    border: solid #373737;
    width: 10%;
    height: 50px;
    font-weight: 600;
    color: #373737;
    font-size: 1.3vw;
    background: #DFE4DE;
    @media screen and (max-width: 1024px){
        width: 15%;
        font-size: 1.6vw;
    }
    @media screen and (max-width: 768px){
        width: 85%;
        font-size: 3vw;
    }
    @media screen and (max-width: 425px){
        width: 90%;
        font-size: 5vw;
    }
    @media screen and (max-width: 320px){
        height: 40px;
        font-size: 6.5vw;
    }
`