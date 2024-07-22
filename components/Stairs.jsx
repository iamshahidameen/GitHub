import { animate, motion } from 'framer-motion';

//animation settings
const stairAnimation = {
    initial: {
        top: '0%'
    },
    animate: {
        top: '100%'
    },
    exit: {
        top: ['100%', '0%']
    }
};

//calculate the reverse index for staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return <div>Stairs New</div>;
};

export default Stairs;
