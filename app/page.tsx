import { Syncopate } from 'next/font/google'
import Image from 'next/image'


const scp = Syncopate({ subsets: ['latin'], weight:['700'] })



export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('/hero_image.png')" }}>
    <div className='mt-80 text-7xl'>
      UI/UX DESIGNER
      <div className='text-xl flex items-center mx-auto justify-center gap-4 mt-8'>
        <button type="button" className='bg-white text-black rounded-full w-[262px] h-[67px] px-6 py-4'>
            MY WORK
        </button>

        <button type="button" className='border-2 border-white w-[262px] h-[67px] px-6 py-4 rounded-full'>
            CONTACT ME
        </button>
      </div>
    </div>
  </div>

  )
}
