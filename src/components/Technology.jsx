import React from 'react'
import {CodeIgniter, Reactjs, Tailwindcss, Mongodb, Mysql, Expressjs, Bootsrtap, Nodejs } from './technologyIcons'

const Technology = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>technology</p>
        <div className='flex gap-10 border-2'>
          <div className='text-[50px] sm:text-[70px] text-ci'>
            <CodeIgniter />
          </div>

          <div className='text-[50px] sm:text-[70px] text-mysql'>
            <Mysql />
          </div>

          <div className='text-[50px] sm:text-[70px] text-bs'>
            <Bootsrtap />
          </div>

          <div className='text-[50px] sm:text-[70px] text-mongodb'>
            <Mongodb />
          </div>

          <div className='text-[50px] sm:text-[70px] text-black'>
            <Expressjs />
          </div>

          <div className='text-[50px] sm:text-[70px] text-reactjs'>
            <Reactjs />
          </div>

          <div className='text-[50px] sm:text-[70px] text-nodejs'>
            <Nodejs />
          </div>

          <div className='text-[50px] sm:text-[70px] text-tailwind'>
            <Tailwindcss />
          </div>
        </div>

    </>
  )
}

export default Technology