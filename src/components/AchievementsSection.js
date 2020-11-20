import React from 'react';
import styled from 'styled-components';
import Hyperloop from './Achievements/Hyperloop/Hyperloop';
import FormulaStudent from './FormulaStudent';

const Styled = styled.div`
.achievements-title {
  padding-top: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}

p {
  font-size: 16px;
  font-weight: 400;
}
`

export class AchievementsSection extends React.Component {
  render() {
    return(
      <Styled ref={this.props.refProp} >
        <div className="achievements-title">
          Achievements
          <p>Team projects from my time in college</p>
        </div>
        <div className="project-list">
          <Hyperloop animate1={this.props.popIn1} animate2={this.props.popIn2}/>
          <FormulaStudent animate1={this.props.popIn3} animate2={this.props.popIn4}/>
        </div>
      </Styled>
    )
  }
}

export default AchievementsSection;