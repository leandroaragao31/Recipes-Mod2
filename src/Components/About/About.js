import React from 'react'
import * as S from './Style'
import Spoon from '../data/Desktop/spoon.png'

const About = () => {
    return(
        <S.AboutContainer>
            <S.SpoonFig>
                <S.SpoonImg src={Spoon} alt='Spoon'/>
            </S.SpoonFig>
            <S.TextContainer>
                <S.Container>
                    <S.Heading>ABOUT</S.Heading>
                    <S.Decoration></S.Decoration>
                </S.Container>
                <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</S.Text>
            </S.TextContainer>
        </S.AboutContainer>
    )
}

export default About