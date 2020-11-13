import React from 'react';
import Project from "../Project";
import WebLearnDescription from "./Description";
import bloodCell from '../../../images/projects/mandelbrotBloodCell.png';
import icicles from '../../../images/projects/mandelbrotIcicles.png';
import inferno from '../../../images/projects/mandelbrotInferno.png';
import lightning from '../../../images/projects/mandelbrotLightning.png';
import normal from '../../../images/projects/mandelbrotNormal.png';
import octopus from '../../../images/projects/mandelbrotOctopus.png';
import psychadelic from '../../../images/projects/mandelbrotPsychadelic.png';
import snowstorm from '../../../images/projects/mandelbrotSnowstorm.png';

const MandlebrotProject = () => {
    return (
        <Project
            languages={['Python3', 'CUDA']}
            title={'Mandelbrot'}
            Description={WebLearnDescription}
            links={[
                {link: 'https://www.youtube.com/playlist?list=PLJsrSpdT9jKOawbrIZByNnJZqIVfpCigs', text: 'Media'},
                {link: 'https://github.com/thedualspace/mandelbrot', text: 'Code'}
            ]}
            carouselItems={[
                {src: inferno, alt: 'Mandelbrot inferno'},
                {src: octopus, alt: 'Mandelbrot octopus'},
                {src: psychadelic, alt: 'Mandelbrot psychadelic'},
                {src: normal, alt: 'Mandelbrot normal'},
                {src: bloodCell, alt: 'Mandelbrot bloodcell'},
                {src: icicles, alt: 'Mandelbrot icicles'},
                {src: snowstorm, alt: 'Mandelbrot snowstorm'},
                {src: lightning, alt: 'Mandelbrot lightning'},

            ]}
            direction={'center'}
        />
    )
}

export default MandlebrotProject;