import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Styled = styled.div`
.footer {
  padding: 80px 0;
  font-size: 14px;
  color: #FFF;
  background-color: #000;
  text-align: center;
}

.social {
  display: flex;
  justify-content: center;
}

p {
  margin: 0 auto;
}
`;

const Footer = () => { 
  return (
    <Styled>
      <div className="footer">
        <div className="social">
          <SocialIcon url="https://www.linkedin.com/in/andrewboland95/" bgColor="#000" fgColor="#FFF" />
          <SocialIcon url="https://github.com/thedualspace" bgColor="#000" fgColor="#FFF" />
          <SocialIcon url="mailto:contact@andrewboland.dev" bgColor="#000" fgColor="#FFF" />
        </div>
        <div className="text">
          <br/>
          <p>Copyright &copy; 2020 Andrew Boland</p>
          <p>Made with &lt;3 in Dublin, Ireland</p>
        </div>
      </div>
    </Styled>
    
  )
}

export default Footer;