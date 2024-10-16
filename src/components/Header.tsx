import logoWhite from '../assets/Logo_white.png'
import first from '../assets/first.png'
import '../styles/header.css'
function Header() {

  return (
    <>
      <div className='header'>

        <div className='flex justify-between p-4 sm:p-10 md:p-16 items-center gap-4'>
          <img src={logoWhite} alt='SoftOwn Solutions' className='z-10 h-14 sm:h-16 md:h-24 w-auto' />
          <button className='text-textSoft z-10 bg-white h-10 rounded-md text-sm sm:p-2 sm:text-base md:text-xl font-b'>
            Acessar o <span className='font-bold'>Sistema</span>
          </button>
        </div>
      </div> 
    </>
  )
}

export default Header