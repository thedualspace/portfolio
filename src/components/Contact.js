import React from 'react';
import BootstrapButton from "react-bootstrap/Button";
import styled from 'styled-components';



const ContactContainer = styled.div`
.contact {
  display: absolute;
  margin: 80px auto;
  text-align: center;
  
}

.contact-button {
  margin: auto;
}

.tagline {
  font-size: 40px;
  font-weight: 500;
}
`;

const Button = styled(BootstrapButton)`
  font-weight: 500; 
  font-size: 20px;
`;

const Contact = (props) => {
  return (
    <ContactContainer ref={props.refProp} >
      <div className="contact" >
        <div className="tagline">
          <p>Interested?</p>
        </div>
        <div className="contact-button">
          <Button variant="dark" href="mailto:andrew.boland.2339@gmail.com">Contact Me</Button>
        </div>
       </div>
    </ContactContainer>
  )
}

export default Contact