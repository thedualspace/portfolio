import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
.navbar {
  display: flex;
  justify-content: center;
  position: fixed;
  height: 56px;
  width: 100vw;
  padding: 0;
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
  font-weight: 700;
  font-size: 20px; 
  display: flex;
  margin: 10px;
  margin-left: 25px;

  @media (max-width: 960px) {
    margin: 12px;
    font-size: 18px;
  }
}

.navbar-links {
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;

  @media (max-width: 960px) {
    margin-right: 12px;
  }
}

a {
  border: 1px transparent;
  border-radius: 16px;
  padding: 4px 8px;
  margin: 10px 5px;
  
  @media (max-width: 960px) {
    margin: 13px 2px;
    padding: 2px 6px;
    font-size: 14px;
  }
}

a:hover, a:active {
  background-color: #F4F4F4;
  cursor: pointer;
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
              <a onClick={this.props.scrollToProjects} >Projects</a>
              <a onClick={this.props.scrollToAchievements} >Achievements</a>
              <a onClick={this.props.scrollToContact} >Contact</a>
            </div>
          </div>
          
        </div>
      </Styled>
    )
    
  }
}

export default NavBar;