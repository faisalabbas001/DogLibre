import React from 'react'
import clock from "../../public/clock.png";
import settings from "../../public/settings.png";
const Section = () => {
  return (
    <div>
       <div className="flex items-center  gap-3 mt-10 ml-[140px]  sm:ml-[470px]  ">
        <img 
          className="bg-white rounded-full mt-10 p-2 w-16 h-16 sm:w-14 sm:h-14 md:w-14 md:h-14"
          src={clock} 
          alt="Clock Logo"
        />
        <img 
          className="bg-white rounded-full  mt-10 p-2 w-16 h-16 sm:w-14 sm:h-14 md:w-14 md:h-14"
          src={settings} 
          alt="Settings Logo"
        />
       
      </div>
    </div>
  )
}

export default Section
