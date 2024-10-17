import { useState } from "react";

interface ImageAndTextProps {
  direction: string;
  imageComponent: string; 
  title: string;
  description: string;
  listMarcation: string[]; 
}

function ImageAndText({direction, imageComponent,title,description,listMarcation}: ImageAndTextProps){

  const [side, setSide] = useState('r')
  
  switch (direction) {
    case 'r':
      break;
    case 'l':
      break;
    default:
      break;
  }
  return (

    <>
      <div>
        <img src={imageComponent}/>
        <h2>{title}</h2>
        <h3>{description}</h3>
        { 
        listMarcation.map ( ( string:string ) => {
            return(
                <li>{string}</li>
            )
        }  )}
      </div> 
    </>
  )
}

export default ImageAndText