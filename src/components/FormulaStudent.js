import React from 'react';
import styled from 'styled-components';
import FSLarge from '../images/Achievements/FSLarge.png';
import FSSmall from '../images/Achievements/FSSmall.png';

const Styled = styled.div`
.project {
  display: grid;
  margin: 100px auto 100px;
  max-width: 960px;
  grid-template-columns: 1.25fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 140px;
  text-align: center;
}

.small-image-container {
  overflow: hidden;
  max-width: 75%;
  grid-column: 2;
  grid-column-end: 2;
  grid-row: 2;
}
.small-image {
  max-width: 100%;
  clip-path: inset( 100% 0% 0% 0% );
}

.large-image-container {
  overflow: hidden;
  margin: 0 0 auto 0;
  width: 100%;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

.large-image {
  width: 100%;
  clip-path: inset( 100% 0% 0% 0% );
}

.text-box {
  position: relative;
  margin: auto 0;
  text-align: left;
  grid-column: 2;
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
  animation: 3s inset forwards;
}

@keyframes inset {
  0% {
    transform: scale(1.4);
    clip-path: inset( 100% 0% 0% 0%);
  }

  100% {
    transform: scale(1);
    clip-path: inset( 0% 0% 0% 0%);
  }
}
`

export class FormulaStudent extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="text-box">
            <div className="title">
              Formula Student
            </div>
            <div className="statement">
              <p><a href="https://youtu.be/xTLn_G9DQz4" target="_blank" rel="noopener noreferrer">International engineering competition</a> where students design and manufacture high performance racing vehicles. Entrants compete at Silverstone Circuit over a number of days. </p>

              <p>Suspension Team Lead for University College Dublin's <a href="https://www.ucdfs.ie/" target="_blank" rel="noopener noreferrer">Formula Student Team</a> (UCDFS).</p>

              <p>Worked as part of the mechanical team on a full car re-design for 2021, leading decisions on the suspension assembly.</p>
            </div>
          </div>
          <div className="large-image-container">
            <img src={FSLarge} className={`project-image large-image ` +this.props.animate1} alt="large" />
          </div>
          <div className="small-image-container">
            <img src={FSSmall} className={`project-image small-image ` +this.props.animate2} alt="small" />
          </div>
          
        </div>
      </Styled>
    )
  }
}

export default FormulaStudent;