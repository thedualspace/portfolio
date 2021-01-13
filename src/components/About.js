import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
.container {
    margin: 80px auto;
    text-align: center;
}

.title {
  font-size: 32px;
  font-weight: 600;
  margin: 45px auto;
  max-width: 560px;
}

.text {
    max-width: 940px;
    margin: auto;
}

p {
}
`;

const About = () => { 
  return (
    <AboutContainer>
        <div className="container" >
            <div className="title">
                Scientific Thinker with a Passion For Good Design and Great Code.
            </div>
            <div className="text">
                <p>I'm an aspiring full-stack developer from Dublin, Ireland ☘️ with a passion for creating highly engaging front-end experiences.</p>
                <p>From my undergraduate degree in Theoretical Physics 🌌 I learned how to think critically and solve difficult, often abstract problems. From the scientific process I learned the value of criticism, and how it is essential for personal growth, something I welcome from my peers on every new project I work on! I also learned how to communicate complex ideas in simple terms during my time as a Lab Demonstrator and Teaching Assistant. 👨‍🏫 </p>
                <p>Outside college I worked on large engineering projects, designing racing vehicles 🏁 and taking on leading universities around the world at SpaceX 🚀. Here I had adapt very quickly to completely new areas of problem solving, and figure out how to digest a huge amount of technical information under time-constraints, a skill I found very useful when diving into the nebulous ecosystem of modern web technologies!</p>
            </div>
        </div>
    </AboutContainer>
    
  )
}

export default About;