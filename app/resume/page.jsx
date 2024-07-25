'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';

import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaVuejs,
    FaNodeJs,
    FaShopify,
    FaWordpress,
    FaBootstrap,
    FaGithub
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
    title: 'About me',
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eligendi accusantium, sapiente ab sint sed nemo labore consequatur at atque est eveniet iusto vel modi ipsum, optio maxime. Repellendus, alias!',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Tabb.'
        },
        {
            fieldName: 'Phone',
            fieldValue: '+ 35 5335 353 45.'
        },
        {
            fieldName: 'Experience',
            fieldValue: '10+ Y.'
        },
        {
            fieldName: 'Teams',
            fieldValue: 'Tabb.'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Tabb.'
        },
        {
            fieldName: 'Email',
            fieldValue: 'Tabb.@tab.com'
        },
        {
            fieldName: 'New',
            fieldValue: 'Tabb.@tab.com'
        },
        {
            fieldName: 'Lang',
            fieldValue: 'Tabb.@tab.com'
        }
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eligendi accusantium, sapiente ab sint sed nemo labore consequatur at atque est eveniet iusto vel modi ipsum, optio maxime. Repellendus, alias!',
    items: [
        {
            company: 'Exmp 1',
            position: 'New',
            duration: '2020 - present'
        },
        {
            company: 'Exmp 1',
            position: 'New'
        },
        {
            company: 'Exmp 1',
            position: 'New'
        },
        {
            company: 'Exmp 1',
            position: 'New'
        },
        {
            company: 'Exmp 1',
            position: 'New'
        },
        {
            company: 'Exmp 1',
            position: 'New'
        }
    ]
};

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eligendi accusantium, sapiente ab sint sed nemo labore consequatur at atque est eveniet iusto vel modi ipsum, optio maxime. Repellendus, alias!',
    items: [
        {
            institution: 'Exmp 1',
            position: 'New',
            duration: '2020 - present'
        },
        {
            institution: 'Exmp 1',
            position: 'New',
            duration: '2020 - present'
        },
        {
            institution: 'Exmp 1',
            position: 'New',
            duration: '2020 - present'
        },
        {
            institution: 'Exmp 1',
            position: 'New',
            duration: '2020 - present'
        },
        {
            institution: 'Exmp 1',
            position: 'New',
            duration: '2020 - present'
        }
    ]
};

const skills = {
    title: 'My Skill',
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eligendi accusantium, sapiente ab sint sed nemo labore consequatur at atque est eveniet iusto vel modi ipsum, optio maxime. Repellendus, alias!',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'HTML5'
        },
        {
            icon: <FaCss3 />,
            name: 'HTML5'
        },
        {
            icon: <FaReact />,
            name: 'HTML5'
        },
        {
            icon: <FaNodeJs />,
            name: 'HTML5'
        },
        {
            icon: <FaFigma />,
            name: 'HTML5'
        },
        {
            icon: <SiTailwindcss />,
            name: 'HTML5'
        },
        {
            icon: <SiNextdotjs />,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML5'
        }
    ]
};

const Resume = () => {
    return <div>Resume</div>;
};

export default Resume;
