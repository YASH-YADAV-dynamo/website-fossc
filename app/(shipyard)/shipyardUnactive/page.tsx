"use client"
import { useEffect, useState } from 'react';
// import React from 'react';
export default function page () {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

// const HorizontalBox: React.FC = () => {
//     const [isHovered, setIsHovered] = React.useState(false);
    
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
            Welcome to Shipyard, our innovative initiative where members convene at  local chapters to collaboratively design, develop, and deploy  groundbreaking products aimed at addressing real-world challenges.  Unlike traditional hackathons, Shipyard prioritizes collaboration over  competition. Whether you join us in person or remotely, you'll be part  of a dynamic community working together towards impactful solutions.  Connect with us on Discord at #shipyard for further details
            </h2>
            </div>
            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
             Shipyard happens every 2 weeks! Whenever , wherever you are join us!
            </h3>
            <p className="mt-4 text-sm sm:text-base">
                By Fossc
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
    <div
  className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4 md:justify-items-stretch"
  id="card-1"
>
  <div className="bg-zinc-900 flex bg-white shadow-lg rounded-lg h-400px my-1 px-1 lg:my-4 lg:px-4 w-full md:w-[40%] hover:bg-fosscGreen">
    <article className="overflow-hidden rounded-lg flex justify-between flex-col">
      <div>
        <header className="flex items-center p-2 md:p-4">
          <h1 className="dark:text-black; font-bold text-3xl 1.875 rem 2.25 rem">
            QUICKFIRE
          </h1>
        </header>
        <p className="font-inter dark:text-white text-grey-darker font-normal text-xl 1.25rem 1.75rem p-2 md:p-4 hover:text-black">
        Quickfire is a powerful Dart CLI tool that supercharges your Flutter  project setup. With just a few commands, you can create a new Flutter  project with all the essential features and configurations, 
        allowing you  to focus on building your app.Craft a feature-rich Flutter project with auth, Bloc architecture, 
        and  onboarding screens, effortlessly deployable on the Play Store without  manual hassles!
        </p>
        <p className="dark:text-orange text-grey-darker font-normal text-xl 1rem 1rem p-2 md:p-4">
        Flutter, Dart, Package
        </p>
        <p className=" bg-lime-500 text-white font-bold py-3 px-5 rounded mb-3 w-1/6 md:p-4 mx-4">
          17 Stars
        </p>

      </div>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a
          className="w-full"
          href="https://github.com/FOSS-Community/quickfire"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dark:text-black bg-gradient-to-b from-slate-400 to-orange-400 from-slate-600 to-orange-400 text-white w-full font-bold py-3 px-5 rounded mb-3">
            Github
          </button>
        </a>
      </footer>
    </article>
  </div>
  <div className="bg-zinc-900 flex shadow-lg rounded-lg h-500px my-1 px-1 lg:my-4 lg:px-4 w-full md:w-[40%] hover:bg-fosscGreen hover:text-black">
    <article className="overflow-hidden rounded-lg flex justify-between flex-col">
      <div>
        <header className="flex items-center p-2 md:p-4">
          <h1 className="dark:text-white font-semibold text-3xl 1.875 rem 2.25 rem">
            CHINO
          </h1>
        </header>
        <p className="dark:text-white font-inter text-grey-darker font-normal text-xl 1.25rem 1.75rem p-2 md:p-4 hover:text-black">
        Chino is a terminal-based chatbot. Powered by OpenAI.Uses RAG to generate responses based on user-provided documents. 
        By harnessing the vast repository of knowledge contained within user-provided documents, Chino is able to dynamically adapt its responses to suit the specific needs and queries of its users. Whether you're seeking information on complex topics, looking for advice, or simply engaging in casual conversation.
        </p>
        <p className="dark:text-orange text-grey-darker font-normal text-xl 1rem 1rem p-2 md:p-4">
        Python
        </p>
        <p className=" bg-lime-500 text-white font-bold py-3 px-5 rounded mb-3 w-1/6 md:p-4 mx-4">
          13 Stars
        </p>
        
      </div>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a
          className="w-full"
          href="https://github.com/SAMAD101/Chino"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-white w-full font-bold py-3 px-5 rounded mb-3">
            Github
          </button>
        </a>
      </footer>
    </article>
  </div>
  <div />
</div>


    </div>
    
    );

};