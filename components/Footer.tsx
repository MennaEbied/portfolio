import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-extrabold text-white text-center tracking-tight leading-tight lg:max-w-[45vw] md:maw-w-[30vw]'>
                Ready to take {''}<span className='text-purple-200'>your</span> digital
                presence to the next level ?
            </h1>
            <p className='text-white text-md md:mt-10 my-5 text-center'>Reach out to me and let&apos;s discuss how i can help you acheive your goals</p>
            <a href="mailto:mennahesham253@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
          <p className='md:text-base text-small md:font-normal font-light'>Copyright © 2025 Menna</p>
          <div className='flex items-center md:gap-3 gap-6 p-2'>
            {socialMedia.map((profile)=>(
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-150  bg-gray-700 rounded-lg boder border-gray-950'>
                    <a href={profile.link} target="_blank">
                    <img
                       src={profile.img}
                       alt='profile' 
                       width={20}
                       height={20}
                    />
                    </a>
                </div>
            ))}
          </div>
    </div>
    </footer>
  )
}

export default Footer