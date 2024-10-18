interface PricingTableProps {
  title: string;
  description: string;
  price: string;
  listAdvantage: string[];
}

function PricingTable( {title, description, price, listAdvantage }: PricingTableProps){
  return (

    <div className="border-solid border-2 rounded-md border-gray-400 border-opacity-10 p-4">
      <h3 className='text-textSoft text-center font-bold text-xl mb-1'>{title}</h3>
      <p className="font-light text-center w-[80%] m-auto">{description}</p>
      <div className="flex justify-center mt-4 mb-8 items-end">
        <p className="text-textSoft text-5xl font-black">R${price}</p>
        <p className="font-light">/mês</p>
      </div>
      <div>
        {
        listAdvantage.map((string, index) => {
          return(
            <div className="flex gap-2" key={index}>
              <i className="bi bi-check-circle-fill text-textSoft"/>
              <li className=" text-textGray">{string}<span className="font-bold text-textGray">fggfdgf</span></li>
            </div>

          );
        })}
      </div>
    </div>
  )
}
export default PricingTable