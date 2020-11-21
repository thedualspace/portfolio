import React from 'react';
import HyperloopDescription from "./Description";
import HyperloopLarge from "../../../images/Achievements/HyperloopLarge.png";
import HyperloopSmall from "../../../images/Achievements/HyperloopSmall.png";
import Achievement from "../Achievement";

/* 
Accepts the animation state prop (animate1, animate2) to decide when to animate images
Mobile sizing condition handled here for now, should really be done within Achievement.js
*/
const Hyperloop = ({ animate1, animate2 }) => {
    return (
        <Achievement
            title={'SpaceX Hyperloop'}
            Description={HyperloopDescription}
            largeImage={ {src: HyperloopLarge, alt: 'Team Éirloop receiving their Innovators Award'} }
            smallImage={ {src: HyperloopSmall, alt: 'Inside the Hyperloop Chamber'} }
            direction={
                window.innerWidth < 960 ? 'center' : 'left'
            }
            animate1={animate1}
            animate2={animate2}
        />
    )
}

export default Hyperloop;