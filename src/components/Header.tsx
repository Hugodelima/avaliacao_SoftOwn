import logoWhite from '../assets/Logo_white.png'
import first from '../assets/first.png'
import '../styles/header.css'
import dot from '../assets/dot.png'

function Header() {

  return (
    <>
      <div className='header'>
        <div className='imageBackground'>
          <img src={dot} className='absolute left-8 bottom-0 z-10' />
          <img src={dot} className='absolute right-8 top-0 z-10' />
          <div className='flex justify-between p-4 sm:p-10 md:p-16 items-center gap-2 md:gap-4'>
            <img src={logoWhite} alt='SoftOwn Solutions' className='z-10 h-14 sm:h-16 md:h-24 w-auto' />
            <button className='text-textSoft z-10 bg-white h-10 p-1 rounded-md text-sm sm:p-2 sm:text-base md:text-xl'>
              Acessar o <span className='font-bold'>Sistema</span>
            </button>
          </div>

          <div className='flex flex-col text-center text-md m-4'>
            <h2 className='z-10 text-white font-bold text-3xl md:text-4xl m-10'>Eleve sua experiência com a gestão inteligente
            de processos.</h2>
            <p className='z-10 text-white m-auto text-xl md:text-2xl md:w-[56%]'><span className='font-semibold'>Diga adeus às planilhas e papéis! <br/></span>Nosso sistema transforma a forma como você gerencia seus casos. Automatize tarefas, centralize informações e ganhe mais tempo para focar no que realmente importa: <span className='font-semibold'>seus clientes.</span></p>
          </div>

          <div className='flex justify-center items-center mr-8 ml-8 mt-8 pb-10 gap-4'>
            <button className='text-textSoft z-10 bg-white rounded-md p-2 font-semibold border-solid border-2 border-white'>
              Conheça nossa ferramenta
            </button>
            <button className='text-white z-10 border-solid border-2 rounded-md p-2 font-semibold'>
              Conheça nossos planos
            </button>
          </div>
        </div>

        <div className='product'>
          <img src={first} className='z-10' />
        </div>
      </div> 
    </>
  )
}

export default Header