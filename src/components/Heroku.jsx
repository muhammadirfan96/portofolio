import React from 'react'
import irf from '../img/irf.jpg'

const Heroku = () => {
  return (
    <>
      <img src={irf} className='rounded-full w-40 border-slate-300 sm:order-last sm:justify-self-end' alt='irf' />
      <div className='text-center sm:text-left sm:justify-self-start'>
        halo!, saya <span className='text-lg text-blue-300'>muhammad irfan</span>, saya adalah seorang web deleveloper
      </div>
    </>
  )
}

export default Heroku