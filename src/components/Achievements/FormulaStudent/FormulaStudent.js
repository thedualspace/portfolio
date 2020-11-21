import React from 'react';
import FormulaStudentDescription from "./Description";
import FSLarge from "../../../images/Achievements/FSLarge.png";
import FSSmall from "../../../images/Achievements/FSSmall.png";
import Achievement from "../Achievement";

/* 
Accepts the animation state prop (animate1, animate2) to decide when to animate images
Mobile sizing condition handled here for now, should really be done within Achievement.js
*/
const FormulaStudent = ({ animate1, animate2 }) => {
    return (
        <Achievement
            title={'Formula Student'}
            Description={FormulaStudentDescription}
            largeImage={ {src: FSLarge, alt: 'UCDFS at Silverstone Circuit'} }
            smallImage={ {src: FSSmall, alt: 'Double A-arm Suspension Assembly'} }
            direction={
                window.innerWidth < 960 ? 'center' : 'right'
            }
            animate1={animate1}
            animate2={animate2}
        />
    )
}

export default FormulaStudent;