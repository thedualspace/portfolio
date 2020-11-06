import React from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import fractal from '../images/fractal.png';


const Styled = styled.div`
.project {
  margin: 75px auto 75px;
  max-width: 960px;
  text-align: center;
}

img {
  max-width: 100%;
}

.text-box {
  margin: auto;
  text-align: left;
  max-width: 540px; /* or 360px */
}

.title {
  font-size: 32px;
  font-weight: 600;
}

.description {
  margin-top: 8px;
}

.badge {
  margin: 0px 8px 20px 0px;
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

export class Mandelbrot extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="title">
            Mandelbrot
          </div>
          <div className="languages">
            <Badge className="big-badge" variant="success">Python3</Badge>
            <Badge className="big-badge" variant="warning">CUDA</Badge>
          </div>
          <div className="image-container">
            <img src={fractal} alt="WebLearn Interface"></img>
          </div>
          <div className="text-box">
            <div className="description">
              <p>Exploration of the famous Mandelbrot Set using python and the open-source JIT compiler Numba.</p>
            
              <p>Featured mutiple color-maps and rendering algorithms to compare efficieny and quality, including the adoption of CUDA-based code.</p>
        
              <p>The curiosity-led project which stoked my interest in digital visualisation and coding at a professional level.</p> 
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

export default Mandelbrot;