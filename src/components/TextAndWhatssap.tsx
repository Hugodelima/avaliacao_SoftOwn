import { PiWhatsappLogo } from "react-icons/pi";

interface TextAndWhatssapProps{
    title: string;
    description: string;
    textButton: string;
    background: boolean;
}

function TextAndWhatssap({title, description, textButton, background}: TextAndWhatssapProps){

    const backgroundClass = (background ? "bg-background" : "");

    return(
        <div className={`flex flex-col md:p-20 p-4 text-center ${backgroundClass} mb-8`}>
            <h2 className="text-textSoft font-bold text-xl mb-1 mt-8">{title}</h2>
            <h3 className='mb-8'>{description}</h3>
            
            <a href="" target="_blank">
                <button className='text-white z-10 bg-textSoft rounded-md p-2 font-semibold border-solid border-2 border-white w-auto m-auto relative flex items-center gap-1  transition-all duration-300 ease-in-out hover:border-textSoft hover:scale-105 hover:shadow-md'>
                {textButton}
                    <PiWhatsappLogo color="white" className="" />
                </button>
            </a>
            
        </div>
    )
}

export default TextAndWhatssap

