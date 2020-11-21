import React from 'react';
import styled from 'styled-components';
import Carousel from "./Carousel";
import TextBox from "./TextBox";

/*
Note that if the device window size is below 960px, *all* projects will be forced into a center direction.
This style is suitable for mobile devices.
*/
const Project = ({ languages, title, Description, direction = 'left', links, carouselItems }) => {
    if (direction === 'center' || window.innerWidth < 960) {
        return (
            <ProjectContainer direction={'center'}>
                <TextBox languages={languages} title={title} Description={Description} direction={'center'} links={links} carouselItems={carouselItems} />
            </ProjectContainer>
        )
    }

    if (direction === 'left') {
        return (
            <ProjectContainer direction={direction}>
                <Carousel carouselItems={carouselItems} />
                <TextBox languages={languages} title={title} Description={Description} direction={direction} links={links} />
            </ProjectContainer>
        )
    }

    return(
        <ProjectContainer direction={direction}>
            <TextBox languages={languages} title={title} Description={Description} direction={direction} links={links} />
            <Carousel carouselItems={carouselItems} />
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    ${({ direction }) => (direction === 'center' ? '' : 'display: grid;')};
    margin: 75px auto 75px;
    max-width: 960px;
    ${({ direction }) => (direction === 'center' ? '' : `grid-template-columns: ${ direction === 'left' ? '1.25fr 0.75fr' : '0.75fr 1.25fr'};`)}
    ${({ direction }) => (direction === 'center' ? '' : 'column-gap: 40px;')}
    text-align: center;
`;

export default Project;