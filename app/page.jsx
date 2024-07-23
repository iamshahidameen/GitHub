import { Button } from '@/components/ui/button';

import { FiDownload } from 'react-icons/fi';
//Site Components
import Social from '@/components/Social';

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* About */}
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Software Tester</span>
                        <h1 className="h1">
                            Hello I'm <br />{' '}
                            <span className="text-accent">Shah</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Hic quos cupiditate consectetur odit harum
                            laborum saepe
                        </p>
                        {/* Social Connects */}

                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2"
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0 ">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="photo">Photo</div>
                </div>
            </div>
        </section>
    );
};

export default Home;
