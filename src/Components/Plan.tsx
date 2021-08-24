
import React from 'react'


const Plan =() =>{
    return(
        <>
            <div className='shadow-2xl h-screen p-6'>
                
                
                <div className='bg-white-700 h-5/6 pt-10 shadow-2xl p-4 rounded-2xl'>
                    <div>
                        <h1 className='text-justify text-purple-500 text-3xl mb-2'>Starter</h1>
                        <p className='text-justify text-2xl mb-6'>Free</p>

                        <ul>
                            <li className='text-justify'>Unlimited files</li>
                            <li className='text-justify'>Unlimited file editors</li>
                            <li className='text-justify'>Unlimited cloud Storage</li>
                        </ul>
                        <button className='p-4 border-2 w-5/6 rounded-2xl'>Choose starter</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan