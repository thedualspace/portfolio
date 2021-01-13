import React from 'react';
import styled from 'styled-components';
import JammingProject from "./Projects/Jamming/JammingProject";
import WebLearnProject from "./Projects/WebLearn/WebLearnProject";
import MandelbrotProject from "./Projects/Mandelbrot/MandlebrotProject";


const Styled = styled.div`
.projects-title {
  padding-top: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}

p {
  font-size: 16px;
  font-weight: 400;
}
`

export class ProjectsSection extends React.Component {
  render() {
    return(
      <Styled ref={this.props.refProp} >
        <div className="projects-title">
          Projects.
          <p>Some things I've worked on.</p>
        </div>
        <div className="project-list">
          <WebLearnProject />
          <MandelbrotProject />
          <JammingProject />
        </div>
      </Styled>
    )
  }
}

export default ProjectsSection