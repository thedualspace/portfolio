import React from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

const variantColours = ['primary', 'warning', 'danger', 'info'];

/**
 * This component takes in an array of strings and turns them into badges
 * @param languages {Array} Strings representing the languages a project was written in i.e. ['React', 'HTML']
 * @param direction {String} Can be center | left | right this decides whether or not to center the languages
 * @returns {*} React component
 */
const Languages = ({ languages = [], direction }) => {
    return (
        <LanguagesContainer direction={direction}>
            {languages.map((language, i) =>
                <StyledBadge key={`${language}${i}`} className="big-badge" variant={variantColours[i] || variantColours[i - variantColours.length]}>{language}</StyledBadge>
            )}
        </LanguagesContainer>
    )
}

const StyledBadge = styled(Badge)`
    margin: 0px 8px 15px 0px;
    font-size: 14px;
    font-weight: 500;
`;

const LanguagesContainer = styled.div`
    ${({ direction }) => {
        if(direction === 'center') {
            return `
                display: flex;
                justify-content: center;
                margin: 0.3em 0;
            `
        }       
    }}
`

export default Languages;