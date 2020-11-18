import React from 'react';
import styled from 'styled-components';
import Carousel from "./Carousel";
import TextBox from "./TextBox";

const Project = ({ languages, title, Description, direction = 'left', carouselItems }) => {
    if (direction === 'center') {
        return (
            <ProjectContainer direction={direction}>
                <TextBox languages={languages} title={title} Description={Description} direction={direction} carouselItems={carouselItems} />
            </ProjectContainer>
        )
    }

    if (direction === 'left') {
        return (
            <ProjectContainer direction={direction}>
                <Carousel carouselItems={carouselItems} />
                <TextBox languages={languages} title={title} Description={Description} direction={direction} />
            </ProjectContainer>
        )
    }

    return(
        <ProjectContainer direction={direction}>
            <TextBox languages={languages} title={title} Description={Description} direction={direction} />
            <Carousel carouselItems={carouselItems} />
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    ${({ direction }) => (direction === 'center' ? '' : 'display: grid;')}
    margin: 75px auto 75px;
    max-width: 960px;
    ${({ direction }) => (direction === 'center' ? '' : `grid-template-columns: ${ direction === 'left' ? '1.25fr 0.75fr' : '0.75fr 1.25fr'};`)}
    ${({ direction }) => (direction === 'center' ? '' : 'column-gap: 40px;')}
    text-align: center;
`;

export default Project;