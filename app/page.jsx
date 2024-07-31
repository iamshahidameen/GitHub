import { Button } from '@/components/ui/button';

import { FiDownload } from 'react-icons/fi';
//Site Components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* About */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Sr. Software Engineer</span>
                        <h1 className="h1">
                            Hello I'm <br />{' '}
                            <span className="text-accent">Shahid</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            With over 5+ years of industry experience, I am a
                            Senior Front-end Developer proficient in designing
                            and building responsive web and mobile applications.
                            My expertise lies in Front-end JavaScript and
                            browser APIs, and I have significant experience in
                            popular frameworks like React and Redux.
                            Additionally, I have Full-stack experience,
                            including Node.js, Next.js Remix.js, and GraphQL. I
                            am known for my problem-solving skills, attention to
                            detail, and dedication to delivering high-quality
                            solutions.
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
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;
