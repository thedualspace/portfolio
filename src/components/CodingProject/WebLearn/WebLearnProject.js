import React from 'react';
import Project from "../Project";
import WebLearnOne from '../../../images/projects/WebLearn1.png';
import WebLearnTwo from '../../../images/projects/WebLearn2.png';
import WebLearnDescription from "./Description";

const WebLearnProject = () => {
    return (
        <Project
            languages={['React', 'JavaScript', 'Node.js', 'MySQL']}
            title={'WebLearn'}
            Description={WebLearnDescription}
            links={[
                {link: 'https://weblearn-app.herokuapp.com/login', text: 'Live'},
                {link: 'https://github.com/thedualspace/WebLearn', text: 'Code'}
            ]}
            carouselItems={[
                {link: 'https://weblearn-app.herokuapp.com/login', src: WebLearnOne, alt: 'WebLearn Login'},
                {link: 'https://weblearn-app.herokuapp.com/login', src: WebLearnTwo, alt: 'WebLearn Interface'}
            ]}
            direction={'left'}
        />
    )
}

export default WebLearnProject;