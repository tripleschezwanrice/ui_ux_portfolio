

const LetsTalk = () => {
  return (
    <div className="h-screen bg-black grid items-center color-white text-center">
        <div className="">
        <p className="text-6xl font-bold" >Let's Talk</p>
         <form action="" className="flex flex-col gap-4 w-[60vw] mt-12 mx-auto items-center text-md font-thin">
        <input type="text" placeholder="Your Name" className="bg-black outline-none border-b-2 py-2  w-[75%] lg:w-[65%]" />
        <input type="email" placeholder="Email"  className="bg-black outline-none border-b-2 py-2  w-[75%] lg:w-[65%]"/>
        <input type="phone" placeholder="Contact Number" className="bg-black outline-none border-b-2 py-2  w-[75%] lg:w-[65%]"/>
        <input type="message" placeholder="Your Messasge" className="bg-black outline-none border-b-2 py-2  w-[75%] lg:w-[65%]"/>
        <button type="submit" className="text-2xl border-white-1 border px-12 py-3 mt-8  rounded-full">SUBMIT</button>
    </form>
        </div>

    </div>  )
}   

export default LetsTalk
