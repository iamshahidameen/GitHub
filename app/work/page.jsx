'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        num: '01',
        category: 'front',
        title: 'Pro 1',
        description:
            'ghghg ghsxjhgsxjhgsjghsx jhg hjgsxjhgsxj shjg sjhgxs jhsxgjs gxsj gjhsxg jxhg sxjgxj hsg',
        stack: [
            { name: 'HTML 5' },
            { name: 'CSS3' },
            { name: 'JavaScript' },
            { name: 'React' }
        ],
        image: '/assets/work/thumb1.png',
        live: 'test',
        github: 'test url'
    },
    {
        num: '01',
        category: 'front',
        title: 'Pro 1',
        description:
            'ghghg ghsxjhgsxjhgsjghsx jhg hjgsxjhgsxj shjg sjhgxs jhsxgjs gxsj gjhsxg jxhg sxjgxj hsg',
        stack: [
            { name: 'HTML 5' },
            { name: 'CSS3' },
            { name: 'JavaScript' },
            { name: 'React' }
        ],
        image: '/assets/work/thumb1.png',
        live: 'test',
        github: 'test url'
    },
    {
        num: '02',
        category: 'Shopify',
        title: 'Pro 2',
        description:
            'ghghg ghsxjhgsxjhgsjghsx jhg hjgsxjhgsxj shjg sjhgxs jhsxgjs gxsj gjhsxg jxhg sxjgxj hsg',
        stack: [
            { name: 'Shopify' },
            { name: 'Liquid' },
            { name: 'JavaScript' },
            { name: 'Vue' }
        ],
        image: '/assets/work/thumb1.png',
        live: 'test',
        github: 'test url'
    },
    {
        num: '03',
        category: 'Vue',
        title: 'Pro 1',
        description:
            'ghghg ghsxjhgsxjhgsjghsx jhg hjgsxjhgsxj shjg sjhgxs jhsxgjs gxsj gjhsxg jxhg sxjgxj hsg',
        stack: [
            { name: 'Vue' },
            { name: 'Quasar' },
            { name: 'JavaScript' },
            { name: 'React' }
        ],
        image: '/assets/work/thumb1.png',
        live: 'test',
        github: 'test url'
    }
];
const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex justify-center flex-col py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="text-8xl text-transparent leading-none font-extrabold text-outline">
                            {project.num}
                        </div>
                        <h2 className="">{project.category} Project</h2>
                    </div>
                    <div className="w-full xl:w-[50%]">slide</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
