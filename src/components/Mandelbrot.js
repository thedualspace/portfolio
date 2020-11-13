import React from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import bloodCell from '../images/projects/mandelbrotBloodCell.png';
import icicles from '../images/projects/mandelbrotIcicles.png';
import inferno from '../images/projects/mandelbrotInferno.png';
import lightning from '../images/projects/mandelbrotLightning.png';
import normal from '../images/projects/mandelbrotNormal.png';
import octopus from '../images/projects/mandelbrotOctopus.png';
import psychadelic from '../images/projects/mandelbrotPsychadelic.png';
import snowstorm from '../images/projects/mandelbrotSnowstorm.png';


const Styled = styled.div`
.project {
  margin: 75px auto 75px;
  max-width: 960px;
  text-align: center;
}

img {
  max-width: 100%;
}

image-container {
  boreder: none;
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

.carousel-fade .carousel-item {
  transition-timing-function: linear;
  transition-duration: 0.4s;
  transition-delay: 0s;
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
            <Carousel indicators={false} controls={false} fade={true} keyboard={false}>
              <Carousel.Item>
                <img src={inferno} alt="Mandelbrot inferno" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={octopus} alt="Mandelbrot octopus" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={psychadelic} alt="Mandelbrot psychadelic" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={normal} alt="Mandelbrot normal map" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={bloodCell} alt="Mandelbrot blood cell" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={icicles} alt="Mandelbrot icicles" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={snowstorm} alt="Mandelbrot snowstorm" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={lightning} alt="Mandelbrot lightning" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text-box">
            <div className="description">
              <p>Exploration of the famous Mandelbrot Set using python and the open-source JIT compiler Numba.</p>
            
              <p>Featured mutiple color-maps and rendering algorithms to compare efficiency and quality, including writing CUDA-based code.</p>
        
              <p>The curiosity-led project which stoked my interest in digital visualisation and coding at a professional level.</p> 
            </div>
            <div className="links">
              <a href="https://www.youtube.com/playlist?list=PLJsrSpdT9jKOawbrIZByNnJZqIVfpCigs" target="_blank"><Button variant="light">Media</Button></a> 
              <a href="https://github.com/thedualspace/mandelbrot" target="_blank"><Button variant="light">Code</Button></a> 
            </div>
          </div>
        </div>
      </Styled>
    )
  }
};

export default Mandelbrot;