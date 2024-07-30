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
import WorkSliderButtons from '@/components/WorkSliderButtons';

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
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.2, ease: 'easeIn' }
            }}
            className="min-h-[80vh] flex justify-center flex-col py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
                    <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            <div className="text-8xl text-transparent leading-none font-extrabold text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} Project
                            </h2>
                            <p className="text-white/60 ">
                                {project.description}
                            </p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li
                                            className="text-xl text-accent"
                                            key={index}
                                        >
                                            {item.name}
                                            {index !==
                                                project.stack.length - 1 && ','}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                {/* Live Project Button/URL */}
                                <Link href="/">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github Project Button/URL */}

                                <Link href="/">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-3xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    alt={project.title}
                                                    className="object-cover"
                                                ></Image>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderButtons
                                containerStyles="flex gap-2 absolute ring-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
