"use client"
import { useEffect, useState } from 'react';
export default function page () {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    
    useEffect(() => {
        const targetDate = new Date('2024-05-03T20:00:00'); 
        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate.getTime() - now.getTime();
            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                setCountdown({ days, hours, minutes });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div>
        <div className="sm:block">
            <div className="mx-auto max-w-3xl text-center w-948 h-133 mt-20 ml-76 text-center text-inter font-bold text-5xl leading-tight tracking-tight">
                <p>wait what’s this shipyard thing?</p>
            </div>


            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 p-10">
        <span className="absolute inset-0 border-10 border-dashed border-black" />
        <div className="relative flex h-full transform items-end bg-myColor transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-7 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <img src="/logo192.png" alt="Logo" width={40} height={40} />

            <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                By Fossc
            </h2>
            </div>
            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                SHIPYARD
            </h3>
            <p className="mt-4 text-sm sm:text-base">
            Welcome to Shipyard, our innovative initiative where members convene at  local chapters to collaboratively design, develop, and deploy  groundbreaking products aimed at addressing real-world challenges.  Unlike traditional hackathons, Shipyard prioritizes collaboration over  competition. Whether you join us in person or remotely, you'll be part  of a dynamic community working together towards impactful solutions.  Connect with us on Discord at #shipyard for further details
            </p>
            </div>
            </div>
        </a>
        </div>
        
        <div className="mt-5 px-10 text-center"></div>
                

                <div className="mx-auto max-w-screen-xl pl-40 py-20 lg:h-screen lg:items-right text-center">
                    <div className="p-4 w-2/6 h-1/6  mx-auto rounded-tl-22 rounded-tr-none rounded-br-none rounded-bl-none mx-auto bg-fosscGreen overflow-hidden">
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center mr-4">
                                <div className="text-4xl font-bold text-black">{countdown.days}</div>
                                <div className="ml-1 text-xl text-black">Days</div>
                            </div>
                            <div className="flex items-center mr-4">
                                <div className="text-4xl font-bold text-black">{countdown.hours}</div>
                                <div className="ml-1 text-xl text-black">Hours</div>
                            </div>
                            <div className="flex items-center mr-4">
                                <div className="text-4xl font-bold text-black">{countdown.minutes}</div>
                                <div className="ml-1 text-xl text-black">Minutes</div>
                            </div>
                        </div>
                    </div>
                </div>
        {/* Shipyard projects */}
        {/* <div className='flex flex-col items-center md:flex-row justify evenly'> */}
            
        <div className="px-6 xl:px-0 m-5 p-2">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-fosscGreen p-5 rounded-md relative h-full w-full">
                                <h1 className="pb-4 text-2xl font-bold text-black">QUICKFIRE</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                            
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                            <h4 className="text-md text-gray-900 text-black">Quickfire is a powerful Dart CLI tool that supercharges your Flutter  project setup. With just a few commands, you can create a new Flutter  project with all the essential features and configurations, allowing you  to focus on building your app.Craft a feature-rich Flutter project with auth, Bloc architecture, and  onboarding screens, effortlessly deployable on the Play Store without  manual hassles!</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <h4 className="text-md text-gray-900 text-black pl-4">Dart, Flutter, package</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Github link</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-myColor p-5 rounded-md relative h-full w-full">
                                    <h1 className="pb-4 text-2xl font-bold">CHINO</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4"></h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Chino is a terminal-based chatbot based on ChatGPT. </h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Python</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Github Link</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>

            </div>


                    <div className="px-4 xl:px-0 py-10">
                        <div className="m-2 p-5 flex flex-col lg:flex-row flex-wrap">
                            <div className="mt-4 lg:mt-0 lg:w-3/5">
                                <div>
                                    <h1 className="text-3xl text-fosscGreen ml-2 lg:ml-0 lg:text-4xl font-bold tracking-normal lg:w-11/12">Frequently asked questions</h1>
                                </div>
                            </div>
                            <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                                <div className="pt-2 relative text-gray-600">
                                    <input className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                    <button type="submit" className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4">
                                        <svg className="h-4 w-4 fill-current" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

    </div>

    </div>

    );
};