import React from 'react';
import JammingDescription from "./Description";
import jammingOne from "../../../images/projects/Jammming1.png";
import jammingTwo from "../../../images/projects/Jammming2.png";
import Project from "../Project";

const JammingProject = () => {
    return (
        <Project
            languages={['React', 'JavaScript', 'HTML & CSS']}
            title={'Jamming'}
            Description={JammingDescription}
            links={[
                {link: 'https://jammming-app.herokuapp.com/', text: 'Live'},
                {link: 'https://github.com/thedualspace/jammming', text: 'Code'}
            ]}
            carouselItems={[
                {link: 'https://jammming-app.herokuapp.com/', src: jammingOne, alt: 'Jammming Login'},
                {link: 'https://jammming-app.herokuapp.com/', src: jammingTwo, alt: 'Jammming Interface'}
            ]}
            direction={'right'}
        />
    )
}

export default JammingProject;