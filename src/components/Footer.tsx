import logo_footer from '../assets/Logo_Footer.png'
import ImageHref from './ImageHref'

import { FiFacebook } from "react-icons/fi"
import { FiInstagram } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from 'react-icons/fi'

function Footer() {

  return (
    <>
      <div className='bg-textSoft p-4'>

        <img src={logo_footer} className='w-[40%] sm:w-[30%] md:w-[20%] lg:w-[10%] m-auto' alt="SoftOwn" />

        <div className='flex flex-col items-center mt-4'>

          <p className='text-white font-bold text-center'>
            <i className="bi bi-c-circle text-white"></i>   SoftOwn 2024. <span className='font-normal'>Todos os direitos reservados.</span>
          </p>
          

          <div className='flex gap-4 mt-4'>
            <ImageHref link='#' iconImage={FiFacebook} />
            <ImageHref link='#' iconImage={FiInstagram} />
            <ImageHref link='#' iconImage={FiLinkedin} />
            <ImageHref link='#' iconImage={FaXTwitter} />
            <ImageHref link='#' iconImage={FiYoutube} />  
          </div>
        </div>
      </div> 
    </>
  )
}

export default Footer