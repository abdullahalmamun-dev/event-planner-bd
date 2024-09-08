import React from 'react';

const MakingDifference = () => {
    return (
        <div className='flex gap-20 h-screen  mx-[200px] my-40'>
            <div className='w-1/2 border-8 border-solid border-base-950 p-16'>
                <p className='text-sm pb-8 '>Culture impacts our life, economy and living.
                </p>
                <p className='text-5xl font-black'>Making a difference
                </p>
                <p className='text-lg pt-5 py-3	font-normal	'>Good design endears people and it is outcome driven. It is the people’s needs and not administration needs as advocated by experts in the field.
                </p>
                <p className='text-lg pb-6 font-normal	'>
                The making of good design is indeed both art and science. Its adoption is increasingly strategic at both leadership and policymaking levels and in business across sectors, professions and industries.
                </p>
                <button className="btn btn-outline">More About Us</button>

            </div>
            <div>
                <div className='relative'>
                    <img className=' h-[487px] w-[461px]' src="https://i.ibb.co.com/JsxTfcV/rembrandt-harmenszoon-van-rijn-67621-1920.jpg" alt="" />
                        <div className=' absolute bottom-[-200px] left-[-150px]'>
                            <img className='border-8 border-solid border-stone-50 top-0 h-[300px] w-[440px] ' src="https://i.ibb.co.com/0sbScWy/woman-3113673-1920.jpg" alt="" />
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default MakingDifference;