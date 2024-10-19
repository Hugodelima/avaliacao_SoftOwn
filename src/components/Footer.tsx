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

        <img src={logo_footer} className='w-[10%] m-auto' alt="" />

        <div className='flex flex-col items-center mt-4'>
            <div className='flex gap-2'>
                <i className="bi bi-c-circle text-white"></i>
                <p className='text-white font-bold'>SoftOwn 2024.  <span className='font-normal'>Todos os direitos reservados.</span></p>
            </div>
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