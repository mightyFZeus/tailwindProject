

interface IProps{
    toggle:boolean
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
    toggleMenu: () => void

   
}

const NavBar: React.FC<IProps> =({toggle, setToggle, toggleMenu}) =>{
   

    return(
        <>
          <div className='flex p-4 bg-blue-700 justify-between gap-2 sm:pr-7 sm:pl-7'>
              <div>
                <p className=' text-white font-bold text-2xl hover:text-blue-100 cursor-pointer'>Worky</p>
              </div>
              <div className='hidden sm:flex justify-between gap-7'>
                <p className='text-white font-bold  hover:text-blue-100 cursor-pointer'>Home</p>
                <p className='text-white font-bold  hover:text-blue-100 cursor-pointer'>Explore</p>
                <p className='text-white font-bold  hover:text-blue-100 cursor-pointer'>Publish</p>
                <p className='text-white font-bold  hover:text-blue-100 cursor-pointer'>About</p>
              </div>
              <div className='hidden sm:block'>
                <button className=' text-white font-bold mr-2 '>Login</button>
                <button className='border-2 p-1 font-bold bg-white text-blue-700 rounded-full'>Sign Up</button>
              </div>
              <div className='sm:hidden'>
                    {
                    toggle?
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu} className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={toggleMenu} className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                       
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                   

                    }
              </div>
          </div>
          {
          !toggle?
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <p className='font-bold mb-5 text-xl'>Home</p>
                    <p className='font-bold mb-5 text-xl'>Explore</p>
                    <p className='font-bold mb-5 text-xl'>Publish</p>
                    <p className='font-bold mb-5 text-xl'>About</p>
                </div>
                <div>
                <button className='  font-bold mr-12 '>Login</button>
                <button className='border-2 p-1 font-bold bg-white text-blue-700 rounded-full'>Sign Up</button>
                </div>
            </div>  
          :''
        }
        </>
    )
}


export default NavBar