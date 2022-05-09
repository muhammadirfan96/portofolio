import React from 'react'
import simokit from '../img/hasil-karya/simokit.jpeg'
import webpunagaya from '../img/hasil-karya/webpunagaya.jpeg'

const HasilKarya = () => {
    const data = [
        {
            gambar: simokit,
            namaKarya: 'simokit',
            ket: 'aplikasi berbasis web yang berfungsi untuk manajemen operasional PLTU PUNAGAYA 2 x 100 MW. Aplikasi ini dibangun menggunakan php native, mPDF, jQuery dan Bootstrap v.5'
        },
        {
            gambar: webpunagaya,
            namaKarya: 'webpunagaya',
            ket: 'aplikasi berbasis web yang berfungsi untuk manajemen operasional PLTU PUNAGAYA 2 x 100 MW. Aplikasi ini dibangun menggunakan framework CodeIgniter 4 dan library pendukung dintaranya yaitu mPDF, Sweet Alert 2, jQuery dan Bootstrap v.5'
        }
    ]

  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>hasil karya</p>
        <div className='mb-2 sm:px-40 grid sm:grid-cols-2 gap-8 justify-items-center'>
        {
            data.map(d => (               
                <div className='grid justify-items-center p-2 bg-white rounded-lg shadow-lg content-start'>
                    <div className='w-full mb-2 border-b-2 border-green-500'>
                        <p className='text-center capitalize'>{d.namaKarya}</p>
                    </div>
                    <img src={d.gambar} className='w-full mb-2' alt={d.gambar} />
                    <p className='text-base text-justify'>{d.ket}</p>
                </div>
            ))
        }

        </div>

    </>
  )
}

export default HasilKarya