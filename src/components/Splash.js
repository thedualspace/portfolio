import React from 'react';
import styled from 'styled-components';
import mandel from '../images/Mandelbrot_wide.png';
import arrowIcon from '../images/svg/icon-arrow-down.svg';

const Styled = styled.div`
.splash {
  overflow: hidden;
  position: relative;
  height: 100vh;
  box-shadow: inset 0 -40px 50px 0px rgba(0,0,0,.5);
}

.text {
  position: absolute;
  top: 18%;
  left: 18.5%;
  color: white;
  letter-spacing: 0.15em;
  z-index: 10;
}

h1 {
  margin: 0;
  font-weight: normal;
  font-size: 40px;
}

p {
  margin: 0;
  font-size: 16px;
}

/* This positioning looks silly 
but it is done to keep the 
oversized background image centred 
for any viewport size */
.mandel {
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
  max-height: 100%;
  z-index: -10;
}

.arrow {
  position: absolute;
  left: 50%;
  bottom: 20px;
  z-index: 10;
  height: 18px;
  width: 36px;
  background-image: url(${arrowIcon});
  animation: hintDown 2s infinite;
}

.arrow:hover {
  cursor: pointer;
}


@keyframes hintDown {
  0%, 15%, 90%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  45% 55% {
    transform: scale(1);
  }
  50% {
    transform: translateY(20%) scale(1.05);
    opacity: 1;
  }
}
`

export class Splash extends React.Component {
  render() {
    return(
      <Styled>
        <div className="splash">
          <div className="text">
            <h1>Andrew Boland</h1>
            <p>WEB DEVELOPER</p>
          </div>
          <img className="mandel" src={mandel} />
          <a onClick={this.props.scrollTo} className="arrow" ></a>
        </div>
      </Styled>
    )
  }
}

export default Splash;