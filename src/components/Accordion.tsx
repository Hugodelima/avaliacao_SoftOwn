interface AccordionProps{
    title: string;
    description: string;
}

function Accordion({title, description}:AccordionProps){
    return(
        <>
            <div className="collapse collapse-arrow md:w-[50%] m-auto p-4">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-bold text-textBlack">{title}</div>
                <div className="collapse-content">
                    <p className="text-textGray">{description}</p>
                </div>
                <hr className="border-hrColor" />
            </div>
        </>
    )
}

export default Accordion