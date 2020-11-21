import React from 'react';
import styled from 'styled-components';
import BootstrapCarousel  from 'react-bootstrap/Carousel';

/**
 *
 * @param items {Array} An array of items in the form of
 * [{link: String, src: ImageImport, alt: String},...]
 * @returns {*}
 * @constructor
 */
const Carousel = ({ carouselItems = [] }) => {
    return (
        <CarouselContainer>
            <BootstrapCarousel indicators={false} controls={false} fade={true} keyboard={false}>
                {carouselItems.map((item, i) => (
                    <BootstrapCarousel.Item key={`${item.src}${i}`}>
                        {item.link &&
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <StyledImage src={item.src} alt={item.alt} />
                            </a>
                        }
                        {!item.link &&
                            <StyledImage src={item.src} alt={item.alt} />
                        }
                    </BootstrapCarousel.Item>
                ))}
            </BootstrapCarousel>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    .carousel-fade .carousel-item {
       transition-timing-function: linear;
       transition-duration: 0.4s;
       transition-delay: 0s;
    }
`;

const StyledImage = styled.img`
    max-width: 100%;
    grid-column: 2;
    grid-column-end: 3;
`;

export default Carousel;