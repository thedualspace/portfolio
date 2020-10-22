import React from 'react';
import styled from 'styled-components';
import mandel from '../images/Mandelbrot_wide.png';
import arrowIcon from '../images/svg/icon-arrow-down.svg';

const Styled = styled.div`
.splash {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.text {
  position: absolute;
  top: 20%;
  left: 10%;
  color: white;
  letter-spacing: 0.15em;
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

.mandel {
  display: block;
  max-height: 100%;
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