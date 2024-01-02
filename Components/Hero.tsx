

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('/hero_image.png')" }}>
    <div className='mt-80 lg:text-7xl md:text-6xl text-[8vw]  text-center'>
      UI/UX DESIGNER
      <div className='md:text-xl text-[16px] flex md:flex-row flex-col items-center mx-auto justify-center gap-4 mt-8'>
        <button type="button" className='bg-white text-black rounded-full md:w-[262px] md:h-[67px]
        w-[194px] h-[50px] md:px-6 md:py-4 items-center '>
            MY WORK
        </button>

        <button type="button" className='border-2 border-white md:w-[262px] md:h-[67px]  w-[194px] h-[50px] md:px-6 md:py-4 rounded-full'>
            CONTACT ME
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero