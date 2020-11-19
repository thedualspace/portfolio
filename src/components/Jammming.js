import React from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import jammming1 from '../images/projects/Jammming1.png';
import jammming2 from '../images/projects/Jammming2.png';

const Styled = styled.div`
.project {
  display: grid;
  margin: 75px auto 75px;
  max-width: 960px;
  grid-template-columns: 0.75fr 1.25fr;
  column-gap: 40px;
  text-align: center;
}

img {
  max-width: 100%;
  grid-column: 2;
  grid-column-end: 3;
}

.text-box {
  text-align: left;
  grid-column: 1;
}

.title {
  font-size: 32px;
  font-weight: 600;
}

.description {
  list-style-type: none;
  margin-top: 8px;
}

.badge {
  margin: 0px 8px 15px 0px;
  font-size: 14px;
  font-weight: 500;
}

.btn {
  padding: 0.375rem 2.25rem;
  margin: 0 8px;
  letter-spacing: 0.05rem;
  font-weight: 500;
}

.links {
  text-align: center;
}

.carousel-fade .carousel-item {
  transition-timing-function: linear;
  transition-duration: 0.4s;
  transition-delay: 0s;
}
`

export class WebLearn extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="text-box">
            <div className="title">
              Jammming
            </div>
            <div className="languages">
              <Badge className="big-badge" variant="primary">React</Badge>
              <Badge className="big-badge" variant="warning">JavaScript</Badge>
              <Badge className="big-badge" variant="danger">HTML & CSS</Badge>
            </div>
            <div className="description">
              <p>Capstone project from the Codecademy React Web Development course.</p>
            
              <p>Allows users to search Spotify's library, create a playlist, and save it to their Spotify account.</p>
        
              <p>Authorization performed using OAuth, utilises Spotify's Web API.</p> 
            </div>
            <div className="links">
              <a href="https://jammming-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button variant="light">Live</Button></a> 
              <a href="https://github.com/thedualspace/jammming" target ="_blank" rel="noopener noreferrer"><Button variant="light">Code</Button></a> 
            </div>
          </div>
          <div className="image-container">
            <Carousel indicators={false} controls={false} fade={true} keyboard={false}>
              <Carousel.Item>
                <a href="https://jammming-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={jammming1} alt="Jammming Login" /></a>
              </Carousel.Item>
              <Carousel.Item>
              <a href="https://jammming-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={jammming2} alt="Jammming Interface" /></a>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Styled>
    )
  }
};

export default WebLearn;