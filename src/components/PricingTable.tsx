interface PricingTableProps {
  title: string;
  description: string;
  price: string;
  listAdvantage: string[];
}

function PricingTable( {title, description, price, listAdvantage }: PricingTableProps){
  return (

    <div className="border-solid border-2 rounded-md border-gray-400 shadow-md border-opacity-10 p-4 relative">
      
      <h3 className='text-textSoft text-center font-bold text-xl mb-1'>{title}</h3>
      <p className="font-light text-center w-[80%] m-auto">{description}</p>
      <div className="flex justify-center mt-4 mb-8 items-end">
        <p className="text-textSoft text-5xl font-black">R${price}</p>
        <p className="font-light">/mês</p>
      </div>
      <div className="flex flex-col gap-4 mb-16">
        {
        listAdvantage.map((string, index) => {
          return(
            <div className="flex gap-2" key={index}>
              <i className="bi bi-check-circle-fill text-textGreen"/>
              <li className=" text-textGray">{string}<span className="font-bold text-textGray">fggfdgf</span></li>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-4 w-[94%]">
        <button className='text-white bg-textSoft rounded-md p-2 font-semibold border-solid border-2 border-white w-full'>
          Selecionar este plano
        </button>
      </div>
    </div>
  )
}
export default PricingTable