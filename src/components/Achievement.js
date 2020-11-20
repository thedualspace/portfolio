import React from 'react';
import styled from 'styled-components';

const Achievement = ({ title, Description, largeImage, smallImage, direction, animate1, animate2 }) => {
  return(
    <AchievementContainer direction={direction}>
      <DescriptionContainer direction={direction} >
        <Title direction={direction} >
          {title}
        </Title>
        <Description />
      </DescriptionContainer>
      <LargeImageContainer direction={direction} >
        <LargeImage src={largeImage.src} className={`project-image large-image ` + animate1} alt={largeImage.alt} />
      </LargeImageContainer>
      { direction !== 'center' && (
        <SmallImageContainer direction={direction}>
          <SmallImage src={smallImage.src} className={`project-image small-image ` + animate2} alt={smallImage.alt} />
        </SmallImageContainer>
      )}
    </AchievementContainer>
  )
}

const AchievementContainer = styled.div`
{
  margin: 75px auto 75px;
  max-width: 960px;
  ${({ direction }) => (direction === 'center' ? '' : 'display: grid;')}
  ${({ direction }) => (direction === 'center' ? '' : `grid-template-columns: ${ direction === 'left' ? '1fr 1.25fr' : '1.25fr 1fr'};`)}
  ${({ direction }) => (direction === 'center' ? '' : `grid-template-rows: repeat(2, 1fr);`)}
  ${({ direction }) => (direction === 'center' ? '' : 'column-gap: 140px;')}
}

.animated {
  animation: 3s inset forwards;
}
@keyframes inset {
  0% {
    clip-path: inset( 100% 0% 0% 0% );
    transform: scale(1.1);
  }
  100% {
    clip-path: inset( 0% 0% 0% 0% );
    transform: scale(1);
  }
}
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  ${({ direction }) => (direction === 'center' ? 'text-align: center;' : '')}
`;

const DescriptionContainer = styled.div`
  position: relative;
  margin: auto 0;
  margin-top: 8px;
  ${({ direction }) => (direction === 'center' ? '' : `grid-column: ${ direction === 'left' ? '1' : '2'};`)}
  ${({ direction }) => (direction === 'center' ? '' : 'grid-row: 1;')}
`;

const LargeImageContainer = styled.div`
  overflow: hidden;
  ${({ direction }) => (direction === 'center' ? '' : `grid-column: ${ direction === 'left' ? '2' : '1'};`)}
  ${({ direction }) => (direction === 'center' ? '' : 'grid-row-start: 1;')}
  ${({ direction }) => (direction === 'center' ? '' : 'grid-row-end: 3;')}
  margin: 0 0 auto 0;
`;

const LargeImage = styled.img`
  width: 100%;
  clip-path: inset( 100% 0% 0% 0% );
`;

const SmallImageContainer = styled.div`
  overflow: hidden;
  max-width: 75%;
  ${({ direction }) => (direction === 'center' ? '' : `margin: ${ direction === 'left' ? '0 0 0 auto;' : ''};`)}
  ${({ direction }) => (direction === 'center' ? '' : `grid-column: ${ direction === 'left' ? '1' : '2'};`)}
  ${({ direction }) => (direction === 'center' ? '' : 'grid-column-end: 2;')} 
  ${({ direction }) => (direction === 'center' ? '' : ' grid-row: 2;')}
`;

const SmallImage = styled.img`
  max-width: 100%;
  clip-path: inset( 100% 0% 0% 0% );
`;






export default Achievement;