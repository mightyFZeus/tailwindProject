import profile1 from '../assetsImage/xmtEdCeBsww.png'
import profile2 from '../assetsImage/6UWqw25wfLI.png'
import profile3 from '../assetsImage/profile4.png'
import profile4 from '../assetsImage/PK_t0Lrh7MM.png'

const Header =(): JSX.Element =>{
    return(
        <>
            <div className=' lg:mt-32 sm:mt-20 md:mt-20  flex flex-wrap justify-around'>
                <div className='lg:mt-36 md:mb-16 bg-test '>
                    <h1 className='font-black text-2xl sm:text-6xl text-left'>
                        Get Your <span className=' text-blue-700'>Project <br />
                         </span>done by a <span className='text-blue-700'>Professional</span>
                    </h1>
                    <p className='text-left mb-4'>Describe your project and get it done by a top Talent</p>
                    <div>
                    
                    <input 
                    placeholder='Try Graphic Designer'
                    
                    className='border-2 align-self-left float-left focus:outline-none w-9/12 border-blue-700 rounded-full p-3' />
                    
                   
                    </div>
                 
                </div>
                <div>
                <div className=''>
                    
                    <div className='hidden  sm:flex sm:mt-20 '>
                        <div className='w-6/12 sm:4/12 p-0'>
                        <img alt='profile' className='shadow rounded-full max-w-full relative left-16 h-auto align-middle border-none' src={profile4} />
                            <div className='shadow-2xl bg-white  p-3 w-64  z-30  flex gap-5 h-15 text-left relative bottom-64 right-20 rounded-full'>
                                <i className='fa fa-envelope'></i>
                                <div>
                                <p className='font-bold '>I make banger video edit</p>
                                <p className='text-sm'>Alice, Video editor</p>
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className='w-6/12 sm:4/12 p-0'>
                            <img alt='profile' className='shadow rounded-full max-w-full h-auto align-middle border-none' src={profile2} />
                            <div className='shadow-xl  bg-white p-3 w-72  z-30 relative bottom-44 left-14  flex gap-5 h-15 text-left  rounded-full'>
                                <i className='fa fa-envelope'></i>
                                <div>
                                <p className='font-bold '>I am a full stack Developer</p>
                                <p className='text-sm'>John, fullstack developer</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div  className='flex '>
                        <div className='w-6/12 sm:4/12 p-0'>
                            <img alt='profile' className='shadow rounded-full relative left-14 bottom-14 max-w-full h-auto align-middle border-none' src={profile3} />
                            <div className='shadow-xl bg-white  p-3 w-72  z-30 relative bottom-60 right-40  flex gap-5 h-15 text-left  rounded-full'>
                                <i className='fa fa-envelope'></i>
                                <div>
                                <p className='font-bold '>I can create cool web designs</p>
                                <p className='text-sm'>Emmanuel, Web developer</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-6/12 sm:4/12 p-0 relative bottom-24 '>
                            <img alt='profile' className='shadow rounded-full max-w-full h-auto relative bottom-0 right-4 align-middle border-none' src={profile1} />
                            <div className='shadow-xl bg-white  p-3 w-72  z-30 relative bottom-80 left-20  flex gap-5 h-15 text-left  rounded-full'>
                                <i className='fa fa-envelope'></i>
                                <div>
                                <p className='font-bold text-sm '>I understand design principles</p>
                                <p className='text-sm'>Chi chi Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    





                </div>

                </div>
            </div>
        </>
    )
}

export default Header