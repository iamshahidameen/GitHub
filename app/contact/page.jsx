'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectValue,
    SelectTrigger
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { Item } from '@radix-ui/react-select';
const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+78) 451 4544 4645'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'Dev Mail'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Systems Limited'
    }
];
const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.2, ease: 'easeIn' }
            }}
            className="py-6 "
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="order-2 xl:w-[54%] xl:order-none">
                        <form
                            action=""
                            className="flex flex-col gap-6 p-10 z-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent ">
                                Lets work together
                            </h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Similique quod aliquam unde
                                obcaecati ipsa vero mollitia reiciendis ullam
                                culpa, quia ad laboriosam libero aut molestias
                                provident, dicta doloremque laborum autem.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="firstName"
                                    placeholder="First Name"
                                />
                                <Input type="email" placeholder="Last Name" />

                                <Input
                                    type="firstName"
                                    placeholder="Email Address"
                                />

                                <Input
                                    type="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue
                                        className="test"
                                        placeholder="Select a service"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select a Service
                                        </SelectLabel>
                                        <SelectLabel value="web">
                                            Web Development
                                        </SelectLabel>
                                        <SelectLabel value="shopify">
                                            Shopify Development
                                        </SelectLabel>

                                        <SelectLabel value="wordpress">
                                            WordPress Development
                                        </SelectLabel>
                                        <SelectLabel value="next">
                                            React/Next Development
                                        </SelectLabel>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here"
                            />
                            <Button size="md" className="max-w-40">
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul>
                            {info.map((Item, index) => {
                                return (
                                    <li
                                        className="flex items-center gap-6"
                                        key={index}
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                                            <div className="text-[28px]">
                                                {Item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">
                                                {Item.title}
                                            </p>
                                            <h3 className="text-xl">
                                                {Item.description}
                                            </h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
