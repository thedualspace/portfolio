import React from 'react';
import styled from 'styled-components';

const Achievement = ({ title, Description, largeImage, smallImage, direction, animate1, animate2 }) => {
  return(
    <AchievementContainer direction={direction}>
      <Title direction={direction} >
        {title}
      </Title>
      <LargeImageContainer>
        <LargeImage src={largeImage.src} className={`project-image large-image ` + animate1} alt={largeImage.alt} />
      </LargeImageContainer>
      { direction !== 'center' && (
        <SmallImageContainer>
          <SmallImage src={smallImage.src} className={`project-image small-image ` + animate2} alt={smallImage.alt} />
        </SmallImageContainer>
      )}
      <DescriptionContainer direction={direction} >
        <Description />
      </DescriptionContainer>

    </AchievementContainer>
  )
}

const AchievementContainer = styled.div`
  margin: 75px auto 75px;
  max-width: 960px;
  ${({ direction }) => (direction === 'center' ? '' : 'display: grid;')}
  ${({ direction }) => (direction === 'center' ? '' : `grid-template-columns: ${ direction === 'left' ? '1fr 1.25fr' : '1.25fr 1fr'};`)}
  ${({ direction }) => (direction === 'center' ? '' : `grid-template-rows: repeat(2, 1fr);`)}
  ${({ direction }) => (direction === 'center' ? '' : 'column-gap: 140px;')}
  ${({ direction }) => (direction === 'center' ? '' : 'text-align: center;')}
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  ${({ direction }) => (direction === 'center' ? 'text-align: center;' : '')}
`;

const DescriptionContainer = styled.div`
  list-style-type: none;
  margin-top: 8px;
  ${({ direction }) => (direction === 'center' ? 'max-width: 540px;' : '')}
  ${({ direction }) => (direction === 'center' ? 'margin: auto;' : '')}
  ${({ direction }) => (direction === 'center' ? 'margin-top: 1em;' : '')}
`;

const LargeImageContainer = styled.div``;

const LargeImage = styled.img``;

const SmallImageContainer = styled.div``;

const SmallImage = styled.img``;






export default Achievement;