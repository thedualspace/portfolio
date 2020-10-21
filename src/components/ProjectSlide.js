import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
.project {
  display: grid;
  margin: 75px auto 75px;
  max-width: 960px;
  grid-template-columns: 1fr 1.25fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 140px;
  text-align: center;
}

.is-rendered {
  animation: pop-in 2.5s;
}

@keyframes pop-in {
  0%, 15%, 90%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(20%);
    opacity: 1;
  }
}

.small-image {
  max-width: 75%;
  grid-column: 1;
  grid-column-end: 2;
  grid-row: 2;
  margin: 0 0 0 auto;
}

.large-image {
  width: 100%;
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}

.text-box {
  position: relative;
  margin: auto 0;
  text-align: left;
  grid-column: 1;
  grid-row: 1;
}

.title {
  font-size: 32px;
  font-weight: 600;
}

.statement {
  margin-top: 20px;
  font-size: 16px;
}

.animated {
  animation: 1s inset;
}

@keyframes inset {
  0% {
    clip-path: inset( 100% 0% 0% 0%)
  }

  100% {
    clip-path: inset( 0% 0% 0% 0%)
  }
}
`

export class ProjectSlide extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="text-box">
            <div className="title">
              Top-Notch photos. Taken up a notch.
            </div>
            <div className="statement">
              HDR+ makes your photos look even better by automatically adjusting the colour and lighting.
            </div>
          </div>
    
          <img src={this.props.largeImage} className={`project-image large-image ` +this.props.animate1} alt="large" />
          <img src={this.props.smallImage} className={`project-image small-image ` +this.props.animate2} alt="small" />
        </div>
      </Styled>
    )
  }
}

export default ProjectSlide;