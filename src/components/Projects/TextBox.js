import React from 'react';
import styled from 'styled-components';
import Languages from "./Languages";
import Button from "react-bootstrap/Button";
import Carousel from "./Carousel";

const TextBox = ({ languages, title, Description, direction, links, carouselItems = [] }) => {
    return (
        <TextBoxContainer direction={direction}>
            <Title direction={direction}>{title}</Title>
            <Languages languages={languages} direction={direction} />
            {direction === 'center' && carouselItems &&  (
                <Carousel carouselItems={carouselItems} />
            )}
            <DescriptionContainer direction={direction}>
                <Description />
            </DescriptionContainer>
            <Links>
                <a href={links[0].link} target="_blank" rel="noopener noreferrer">
                    <StyledButton variant="light">{links[0].text}</StyledButton>
                </a>
                <a href={links[1].link} target ="_blank" rel="noopener noreferrer">
                    <StyledButton variant="light">{links[1].text}</StyledButton>
                </a>
            </Links>
        </TextBoxContainer>
    )
}

const TextBoxContainer = styled.div`
    text-align: left;
    ${({ direction }) => (direction === 'left' ? '' : 'grid-column: 1;')}
`;

const DescriptionContainer = styled.div`
    list-style-type: none;
    margin-top: 8px;
    ${({ direction }) => (direction === 'center' ? 'max-width: 540px;' : '')}
    ${({ direction }) => (direction === 'center' ? 'margin: auto;' : '')}
    ${({ direction }) => (direction === 'center' ? 'padding: 0 30px;' : '')};
    ${({ direction }) => (direction === 'center' ? 'margin-top: 1em;' : '')}
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    ${({ direction }) => (direction === 'center' ? 'text-align: center;' : '')}
`;

const Links = styled.div`
    text-align: center;
`;

const StyledButton = styled(Button)`
    padding: 0.375rem 2.25rem;
    margin: 0 8px;
    letter-spacing: 0.05rem;
    font-weight: 500;
`;

export default TextBox;