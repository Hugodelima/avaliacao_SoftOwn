interface PricingTableProps {
  title: string;
  description: string;
  price: string;
  listAdvantage: string[];
}

function PricingTable( {title, description, price, listAdvantage }: PricingTableProps){
  return (

    <div>
      <h3 className='text-textSoft font-bold text-xl mb-1'>{title}</h3>
      <p>{description}</p>
      <div className="flex">
        <p>R${price}</p>
        <p>/mês</p>
      </div>
      <div>
        {
        listAdvantage.map((string, index) => {
          return(
            <div className="flex" key={index}>
              <i className="bi bi-check-circle-fill text-textSoft"/>
              <li>{string}</li>
            </div>

          );
        })}
      </div>
    </div>
  )
}
export default PricingTable