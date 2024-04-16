import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
to {transform: scale(1,1); opacity: 1;}
`;

const textReveal = keyframes`
to{
  background-size: 100% 100%;
}
`;

const fadeOut = keyframes`
to {opacity: 0;}
`;

const lastSectionReveal = keyframes`
from {transform: scale(0.8, 0.8); opacity: 0.1;}
to {transform: scale(1,1); opacity: 1;}
`;

// Styled components
const Container = styled.div`
  padding: 20px;
  overflow: clip;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  margin-bottom: 80px;

  animation: ${fadeOut} linear;
  animation-timeline: view(y);
  animation-range: exit -200px;
`;

const LastSectionContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  margin-bottom: 80px;

  animation: ${lastSectionReveal} linear;
  animation-timeline: view(y);
  animation-range: entry;
`;

const TopImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  z-index: -1;
`;

const Title = styled.h1`
  margin: 0 auto;
  align-self: center;
  white-space: pre-line;
  text-align: center;
  padding: 10px 20px;
  color: #fffaed;
  font-weight: bold;
  font-size: 65px;
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
`;

const LastImage = styled.img`
  width: 100%;
`;

const FadingInImage = styled(Image)`
  @supports (animation-timeline: view()) {
    transform: scale(0.8, 0.8);
    opacity: 0.1;
    animation: ${fadeIn} linear forwards;
    animation-timeline: view(y);
    animation-fill-mode: both;
    animation-duration: 1ms;
    animation-range: contain 20vh;
  }
`;

const Content = styled.div`
  max-width: 75vw;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.p`
  margin-bottom: 70px;
`;

const TextElement = styled.span`
  font-size: 18px;
  color: hsl(0 0% 0% / 0.3);
  background-clip: text;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-image: linear-gradient(90deg, #000, #000);

  animation: ${textReveal} linear forwards;
  animation-timeline: view(y);
  animation-range: contain 25vh;
`;

const TitleElement = styled.span``;

const Information = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>{'Engineering \nTest'}</Title>
        <TopImage src="https://picsum.photos/id/62/800/400" alt="Image 1" />
      </HeaderContainer>

      <Content>
        <TextContainer>
          <TextElement>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada quam nec est varius, at mollis mi dapibus. Mauris eu est
            vitae velit convallis accumsan. Donec feugiat nunc vitae quam
            sodales, id lobortis quam scelerisq.
          </TextElement>
        </TextContainer>

        <h1>
          <TitleElement>Lorem ipsum dolor</TitleElement>
        </h1>

        <ImageContainer>
          <FadingInImage src="https://picsum.photos/800/400" alt="Image 2" />
        </ImageContainer>
        <TextContainer>
          <TextElement>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada quam nec est varius, at mollis mi dapibus. Mauris eu est
            vitae velit convallis accumsan. Donec feugiat nunc vitae quam
            sodales, id lobortis quam scelerisque.ius, at mollis mi dapibus.
            Mauris eu est vitae velit convallis accumsan. Donec feugiat nunc
            vitae quam sodales, id lobortis quam scelerisque.
          </TextElement>
        </TextContainer>

        <ImageContainer>
          <FadingInImage src="https://picsum.photos/800/400" alt="Image 3" />
        </ImageContainer>

        <h1>
          <TitleElement>Donec feugiat</TitleElement>
        </h1>
        <p>
          <TextElement>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada quam nec est varius, at mollis mi dapibus. Mauris eu est
            vitae velit convallis accumsan. Donec feugiat nunc vitae quam
            sodales, id lobortis quam scelerisque.ius, at mollis mi dapibus.
            Mauris eu est vitae velit convallis accumsan. Donec feugiat nunc
            vitae quam sodales, id lobortis quam scelerisque.
          </TextElement>
        </p>

        <ImageContainer>
          <FadingInImage src="https://picsum.photos/800/400" alt="Image 3" />
        </ImageContainer>
        <LastSectionContainer>
          <LastImage src="https://picsum.photos/800/400" />
        </LastSectionContainer>
      </Content>
    </Container>
  );
};

export default Information;
