interface ImageAndTextProps {
  direction: string;
  imageComponent: string; 
  title: string;
  description: string;
  listMarcation: string[]; 
  background: boolean;
}

function ImageAndText({direction, imageComponent,title,description,listMarcation, background}: ImageAndTextProps){

  return (

    <>
      <div className={ background ? "flex flex-wrap xl:flex-nowrap p-40 bg-background gap-10" : 'flex flex-wrap xl:flex-nowrap p-40 gap-10'}>
        {direction === 'L' ? (

          <div>
            <img src={imageComponent} className="" />
          </div>
        ) : null}

        <div className="flex flex-col justify-center mb-32">
          <h2 className="text-textSoft font-bold text-xl mb-4">{title}</h2>
          <h3>{description}</h3>
          { 
          listMarcation.map((string, index) => {
            const position = string.indexOf(':') + 1;
            return (
              <div className="flex gap-2" key={index}>
                  <i className="bi bi-check-circle-fill text-textSoft"></i>
                  <li className="mb-2">
                      <span className="text-textSoft font-semibold">{string.substring(0, position)}</span>
                      {string.substring(position, string.length)}
                  </li>
              </div>
            );
          })}
        </div>

        {direction === 'R' ? (
            <div>
                <img src={imageComponent} className="" />
            </div>
        ) : null}
  </div>

        
    </>
  )
}

export default ImageAndText