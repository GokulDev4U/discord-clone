import { DownloadIcon } from '@heroicons/react/outline';
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-discord_blue pb-8 flex justify-center  md:pb-0'>
            <div className='p-7 py-9 h-screen md:h-85vh md:flex relative'>
                <div className='flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center'>
                    <h1 className='text-5xl text-white font-bold'>Your palce to talk</h1>
                    <h2 className='text-white text-lg font-light tracking-wide lg:max-w-3xl w-full'>
                    Whether you’re part of a school club, gaming group, worldwide art
                    community, or just a handful of friends that want to spend time
                    together, Discord makes it easy to talk every day and hang out more
                    often. 
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row gap-6">
                        <button className='bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out'>
                            <DownloadIcon className='w-6 mr-2'/>
                            DownLoad for Mac
                        </button>
                        <button className='bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>Open discord in your browser</button>
                    </div>
                </div>
                <div className="flex-grow">
                    <img
                        src='https://shitcord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg'
                        alt=""
                        className="absolute -left-36 mt-10 sm:-left-44 h-auto inline md:hidden"
                    />
                    <img
                        src="https://assets-global.website-files.com/60058af53d79fbd8e14841ea/6017eac38df8ed9b368eb36b_c01c644bc9fa2a28678ae2f44969d248.svg"
                        alt=""
                        className="hidden md:inline"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
