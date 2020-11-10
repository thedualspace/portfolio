import React from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

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

.small-image-container {
  overflow: hidden;
  max-width: 75%;
  display: grid;
  grid-column: 1;
  grid-column-end: 2;
  grid-row: 2;
  margin: 0 0 0 auto;
}

.small-image {
  max-width: 100%;
  margin: 0 0 0 auto;
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
  animation: 3s inset;
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

.big-badge {
  font-size: 16px;
}
`

export class ProjectSlide extends React.Component {
  render() {
    return (
      <Styled>
        <div ref={this.props.refProp} className="project">
          <div className="text-box">
            <div className="title">
              SpaceX Hyperloop Pod Competition
            </div>
            <div className="statement">
              The man the musk the legend
            </div>
          </div>

          <div className="large-image-container">
            <img src={this.props.largeImage} className={`project-image large-image ` +this.props.animate1} alt="large" />
          </div>       
          <div className="small-image-container">
            <img src={this.props.smallImage} className={`project-image small-image ` +this.props.animate2} alt="small" />
          </div>
        </div>
      </Styled>
    )
  }
}

export default ProjectSlide;