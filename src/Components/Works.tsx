
import vector1 from '../assetsImage/Vector.png'
import vector2 from '../assetsImage/Vector (1).png'
import vector3 from '../assetsImage/Vector (2).png'
import profile1 from '../assetsImage/ux 1.png'
import star from '../assetsImage/Vector (4).png'
import profile10 from '../assetsImage/S6hq9V3cfxQ.png'
import profile11 from '../assetsImage/AzVexpHvuKY.png'
import profile12 from '../assetsImage/JoKS3XweV50.png'

interface IProps {
    image?: any
   
}

const starArray = [
    {image: star},
    {image: star},
    {image: star},
    {image: star},
    
]

const Works: React.FC<IProps> =() =>{
    return(
        <>
             <h1 className='font-black text-5xl mb-16'>How it Works</h1>
            <div className='flex-col flex md:flex-row justify-around'>
               
                <div className='flex flex-col'>
                    <img className='h-14 w-14 self-center' src={vector1} />
                    <p className='md:px-40 pt-10'>
                        Login or signup as a new user to 
                        access job and client globally
                    </p>
                </div>
                <div className='flex flex-col'>
                    <img className='h-14 w-14 self-center' src={vector2} />
                    <p className='md:px-40 pt-8'>
                        Explore a community of Skilled freelancer
                        and clients from all over the world
                    </p>
                </div>
                <div className='flex flex-col'>
                    <img className='h-14 w-14 self-center' src={vector3} />
                    <p className='md:px-40 pt-8'>
                        Hire a freelancer or connect with
                        a client and get your job done
                    </p>
                </div>
               
            </div>
            <button className='border-2 p-3 rounded-3xl hover:bg-blue-900 font-extrabold mt-12 bg-blue-700 text-white'>Get Started</button>
            <div className='flex-col flex md:flex-row justify-between'>
                <div>
                    <img className='md:h-3/4' src={profile1} />
                </div>
                <div className='text-left md:mt-80 md:mr-32 '>
                    <h1 className='md:font-black mt-16 text-5xl'>Kickstart Your Journey! <br /> <span className='text-blue-700'>Create Your Portfolio</span></h1>
                    <p className='md:pr-14 font-bold '>We offer resume and business porfolio creation <br /> services. choose from existing 
                        templates and <br /> create that profile to land your dream Job
                    </p>
                    <button className='border-2 p-2 px-6 mt-6 bg-blue-700 text-xl text-white font-bold rounded-2xl'>Try for free</button>
                </div>
            </div>
            <div className='bg-near-footer p-4'>
                <h1 className='font-black text-3xl mt-16'> Be in the Community!</h1>
                <div className='flex justify-around'>
                    <div className=''>
                        <div className='rounded-full w-40 p-2 pl-4 left-24 top-8 relative bg-white shadow-xl z-30 flex gap-1'>
                        {
                                starArray.map((star)=>(
                                    <img src={star.image} />
                                ))
                            }
                        </div>
                
                        <div className='w-6/12 sm:4/12 px-4 '>
                            <img className='shadow  rounded-full w-60 h-28 align-middle border-none' src={profile10} />
                        </div>
                        
                    </div>
                    <div className=''>
                        <div className='rounded-full w-40 p-2 pl-4 left-24 top-8 relative bg-white shadow-xl z-30 flex gap-1'>
                        {
                                starArray.map((star)=>(
                                    <img src={star.image} />
                                ))
                            }
                        </div>
                
                        <div className='w-6/12 sm:4/12 px-4 '>
                            <img className='shadow rounded-full w-60 h-28 align-middle border-none' src={profile11} />
                        </div>
                        
                    </div>
                </div>
                <div className='flex md:flex-col  justify-items-center items-center'>
                    <p className='font-medium w-1/2'>"It took me little or none time at all to hire a web developer for my project. 
                        I was worried I wouldnt be done on time, but he completed the job before the deadline!"</p>
                    <h4 className='font-black text-xl mt-6'>Olaniyi Mohammed</h4>
                    <div className='flex gap-1'>
                    {
                        starArray.map((star)=>(
                            <img src={star.image} />
                        ))
                    }
                    </div>
                </div>
               
                <div className='flex justify-evenly'>
                    <div className=''>
                        <div className='rounded-full w-40 p-2 pl-4 left-24 top-8 relative bg-white shadow-xl z-30 flex gap-1'>
                        {
                                starArray.map((star)=>(
                                    <img src={star.image} />
                                ))
                            }
                        </div>
                
                        <div className='w-6/12 sm:4/12 px-4 '>
                            <img className='shadow  rounded-full w-60 h-28 align-middle border-none' src={profile11} />
                        </div>
                        
                    </div>
                    <div className=''>
                        <div className='rounded-full w-40 p-2 pl-4 left-24 top-8 relative bg-white shadow-xl z-30 flex gap-1'>
                        {
                                starArray.map((star)=>(
                                    <img src={star.image} />
                                ))
                            }
                        </div>
                
                        <div className='w-6/12 sm:4/12 px-4 '>
                            <img className='shadow rounded-full w-60 h-28 align-middle border-none' src={profile12} />
                        </div>
                        
                    </div>
                </div>
            </div> 
        
        </>
    )
}


export default Works