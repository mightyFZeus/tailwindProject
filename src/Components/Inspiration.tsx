import React from 'react'
import profile from './test.webp'



const Inspiration = () =>{
    return(
        <>
           
                <div className='shadow-2xl h-screen  bg-white rounded-2xl p-10'>
                    <div className='mt-15 flex md:mt-28 flex-col justify-around md:flex-row'>
                        <div className='mb-4'>
                            <h3 className='text-3xl font-bold text-center lg:mt-20 lg:font-3xl'>To Continue,  </h3>
                            <h3 className='text-3xl font-bold text-center mb-10 lg:font-3xl '>  Please Sign In</h3>
                        </div>
                        <div >
                            <button className='border-2 p-4 flex w-full  focus:outline-none    border-red-black rounded mb-3'  >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                                <p>Continue with Apple</p> 
                                
                            </button>
                            <button className='border-2 p-4 flex w-full  focus:outline-none    rounded mb-3'  >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                                <p>Continue with Goggle</p> 
                                
                            </button>
                            <p className='text-center mb-15'>OR</p>
                            <p className='text-justify mt-15'>Email Address</p>
                            <input
                            className='  border-2 p-4  w-full  focus:outline-none     rounded mb-3'
                            type='email '
                            placeholder='email Adrress'
                            />
                             < button 
           
           className=' rounded p-4  w-full  font-bold bg-red-500 text-white border-4 '>
       
              Continue with Apple
           </button>
                           
                        </div>
                       
                    </div>
                </div>
            
        </>
    )
}


export default Inspiration