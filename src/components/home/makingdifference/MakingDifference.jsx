import React from 'react';

const MakingDifference = () => {
  return (
    <div className="items-center h-max-content	flex flex-wrap gap-20 h-screen mx-4 sm:mx-6 md:mx-16 lg:mx-24 xl:mx-32 sm:my-6 md:my-8 lg:my-10 xl:my-12 ">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm: md: lg: xl:">
        <div className='border-8 border-base-950 border-solid p-20 flex flex-wrap'>
        <p className="text-sm pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 text-green-600 text-xl	">Culture impacts our life, economy and living.</p>
        <p className="text-5xl font-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Making a difference</p>
        <p className="text-lg pt-5 py-10 font-normal sm:text-base md:text-lg lg:text-xl xl:text-2xl">Good design endears people and it is outcome driven. It is the people’s needs and not administration needs as advocated by experts in the field.</p>
        <p className="text-lg font-normal sm:text-base md:text-lg lg:text-xl xl:text-2xl pb-10">The making of good design is indeed both art and science. Its adoption is increasingly strategic at both leadership and policymaking levels and in business across sectors, professions and industries.</p>
        <button className="btn btn-outline py-2 px-4 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
  More About Us
</button>
        </div>
      </div>
      <div>
        <div className="relative">
          <img className="h-[587px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-[461px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]" src="https://i.ibb.co.com/JsxTfcV/rembrandt-harmenszoon-van-rijn-67621-1920.jpg" alt="" />
          <div className="absolute bottom-[-320px] sm:bottom-[-150px] md:bottom-[-200px] lg:bottom-[-250px] xl:bottom-[-300px] left-[-0] sm:left-[-100px] md:left-[-150px] lg:left-[-200px] xl:left-[-250px]">
            <img className="border-8 border-solid border-stone-50 top-0 h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] w-[440px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] " src="https://i.ibb.co.com/0sbScWy/woman-3113673-1920.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;