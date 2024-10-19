import { IconType } from "react-icons";

interface ImageHrefProps{
    link: string;
    iconImage: IconType;
}

function ImageHref({link, iconImage: IconImage}: ImageHrefProps){
    return(
        <>
            <a href={link} target="_blank">
                <IconImage color="white"/>
            </a>
        </>
    )
}

export default ImageHref