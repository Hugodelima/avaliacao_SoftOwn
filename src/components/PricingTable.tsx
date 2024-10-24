interface PricingTableProps {
  title: string;
  description: string;
  price: string;
  listAdvantage: string[];
  favorite?: boolean;
}

function PricingTable( {title, description, price, listAdvantage, favorite }: PricingTableProps){
  return (
    
    <div className="border-solid border-2 rounded-md border-gray-400 shadow-md border-opacity-10 p-4 relative pt-8 xl:w-[24%]">
      {favorite ?
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full">
          <button className='text-white z-10 bg-textGreen rounded-md p-2 border-solid border-2 border-white w-auto m-auto relative pl-8 flex items-center' disabled>
            Plano mais contratado
            <i className="bi bi-star text-white absolute left-2"></i>
          </button>
        </div>
      : null}
      
      <h3 className='text-textSoft text-center font-bold text-xl mb-1'>{title}</h3>
      <p className="font-light text-center w-[80%] m-auto">{description}</p>
      <div className="flex justify-center mt-4 mb-8 items-end">
        <p className="text-textSoft text-5xl font-black">R${price}</p>
        <p className="font-light">/mês</p>
      </div>
      <div className="flex flex-col gap-4 mb-16">
        {
        listAdvantage.map((string, index) => {

          const stringPositionTwoPoins = string.indexOf(':')

          return(
            <div className="flex gap-2" key={index}>
              <i className="bi bi-check-circle-fill text-textGreen"/>
              <li className=" text-textGray">{string.substring(0, stringPositionTwoPoins-1)}<span className="font-bold text-textGray">{string.substring(stringPositionTwoPoins+1)}</span></li>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-4 w-[92%] left-1/2 transform -translate-x-1/2">
        <button className='text-white bg-textSoft rounded-md p-2 font-semibold border-solid border-2 border-white w-full  transition-all duration-300 ease-in-out hover:border-textSoft hover:scale-105 hover:shadow-md'>
          Selecionar este plano
        </button>
      </div>
    </div>
  )
}
export default PricingTable