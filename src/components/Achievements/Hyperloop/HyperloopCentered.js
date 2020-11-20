import React from 'react';
import styled from 'styled-components';
import hyperloopLarge from '../../../images/Achievements/HyperloopLarge.png';

const Styled = styled.div`
.project {
  margin: 75px auto 75px;
  max-width: 960px;
}
.large-image-container {
  overflow: hidden;
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0 0 auto 0;
}
.large-image {
  width: 100%;
  clip-path: inset( 100% 0% 0% 0% );
}
.text-box {
  position: relative;
  margin: auto 0;
  text-align: left;
}
.title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin: 20px;
}
.statement {
  margin-top: 20px;
  font-size: 16px;
  padding: 0 20px;
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
`

export class HyperloopCentered extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="text-box">
            <div className="title">
              SpaceX Hyperloop Pod Competition
            </div>
            <div className="large-image-container">
              <img src={hyperloopLarge} className={`project-image large-image animated`} alt="large" />
            </div>
            <div className="statement">
              <p>Éirloop was Ireland's first submission to the annual <a href="https://youtu.be/VYStvnepo40" target="_blank" rel="noopener noreferrer">SpaceX Hyperloop Pod Competition</a>.</p>
              
              <p>One of only 20 teams from over 1000 invited to finals at SpaceX HQ in California. One of only 3 teams to receive an Innovators Award.</p> 
            
              <p>I was primarily responsible for building mathematical models of pod behavior during rapid acceleration and high velocity phases.</p>
            </div>
          </div>
        </div>
      </Styled>
    )
  }
}

export default HyperloopCentered;