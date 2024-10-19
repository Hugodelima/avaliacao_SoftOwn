interface TextAndWhatssapProps{
    title: string;
    description: string;
    textButton: string;
    background: boolean;
}

function TextAndWhatssap({title, description, textButton, background}: TextAndWhatssapProps){

    const backgroundClass = (background ? "bg-background" : "");

    return(
        <div className={`flex flex-col md:p-20 p-4 bg-background text-center ${backgroundClass}`}>
            <h2 className="text-textSoft font-bold text-xl mb-1">{title}</h2>
            <h3 className='mb-8'>{description}</h3>
            
            <button className='text-white z-10 bg-textSoft rounded-md p-2 font-semibold border-solid border-2 border-white w-auto m-auto relative pr-8'>
            {textButton}
                <i className="bi bi-whatsapp absolute right-2"></i>
            </button>
        </div>
    )
}

export default TextAndWhatssap

