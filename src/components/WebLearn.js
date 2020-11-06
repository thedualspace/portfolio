import React from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import laptop from '../images/tempLaptop.png';

const Styled = styled.div`
.project {
  display: grid;
  margin: 75px auto 75px;
  max-width: 960px;
  grid-template-columns: 1.25fr 0.75fr;
  column-gap: 40px;
  text-align: center;
}

img {
  max-width: 100%;
}

.text-box {
  text-align: left;
}

.title {
  font-size: 32px;
  font-weight: 600;
}

.description {
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
`

export class WebLearn extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="image-container">
            <img src={laptop} alt="WebLearn Interface"></img>
          </div>
          <div className="text-box">
            <div className="title">
              WebLearn
            </div>
            <div className="languages">
              <Badge className="big-badge" variant="primary">React</Badge>
              <Badge className="big-badge" variant="warning">JavaScript</Badge>
              <Badge className="big-badge" variant="success">Node.js</Badge>
              <Badge className="big-badge" variant="info">MySQL</Badge>
            </div>
            <div className="description">
              <p>Proof-of-concept Online Learning platform with automated serverside MCQ test correction.</p>
            
              <p>Hashed and salted user passwords stored in MySQL database using Passport.js</p>
        
              <p>Modular codebase specifically designed for easy expansion of subjects and customisable courses.</p> 
            </div>
            <div className="links">
              <Button variant="light">Live</Button> 
              <Button variant="light">Code</Button> 
            </div>
          </div>
        </div>
      </Styled>
    )
  }
};

export default WebLearn;