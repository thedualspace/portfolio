import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
.navbar {
  display: flex;
  justify-content: center;
  position: fixed;
  height: 56px;
  width: 100vw;
  z-index: 100;
  background-color: white;
  opacity: 1;
  transition: opacity 0.25s;
  box-shadow:  0 4px 5px -2px rgba(0,0,0,.2);
}

.hidden{
  opacity: 0;
}
.navbar-content {
  display: flex;
  justify-content: space-between;
  width: 1025px; 
}

.navbar-title {
  FONT-WEIGHT: bold;
  font-size: 20px; 
  display: flex;
  margin: 10px;
  margin-left: 25px;
}

.navbar-links {
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
}

a {
  border: 1px transparent;
  border-radius: 16px;
  padding: 4px 6px;
  margin: 10px;
}

a:hover, a:active {
  background-color: #F4F4F4;
}
`

export class NavBar extends React.Component {
  render() {
    return(
      <Styled>
        <div className={`navbar ` + this.props.displayStatus }  >
          <div className="navbar-content">
            <div className="navbar-title">
              ANDREW.
            </div>
            <div className="navbar-links">
              <a>Projects</a>
              <a>Teams</a>
              <a>Contact</a>
            </div>
          </div>
          
        </div>
      </Styled>
    )
    
  }
}

export default NavBar;