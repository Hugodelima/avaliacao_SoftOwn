import { IconType } from "react-icons";

interface ImageHrefProps{
    link: string;
    iconImage: IconType;
}

function ImageHref({link, iconImage: IconImage}: ImageHrefProps){
    return(
        <>
            <a href={link} target="_blank" className="transition-transform duration-300 ease-in-out hover:scale-125 hover:opacity-80">
                <IconImage color="white"/>
            </a>
        </>
    )
}

export default ImageHref