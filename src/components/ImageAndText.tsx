import dot from '../assets/dot_blue.svg'

interface ImageAndTextProps {
  direction: string;
  imageComponent: string; 
  title: string;
  description: string;
  listMarcation: string[]; 
  background: boolean;
}

function ImageAndText({direction, imageComponent,title,description,listMarcation, background}: ImageAndTextProps){

  const flexDirectionClass = (direction === "R" ? "flex-wrap-reverse" : "flex-wrap");
  const backgroundClass = (background ? "bg-background" : "");

  return (

    <>
      <div className={`flex ${flexDirectionClass} xl:flex-nowrap md:p-40 p-4 gap-10 ${backgroundClass} secret`}>
        {direction === 'L' ? (

          <div className='relative w-full h-full'>
            <img src={imageComponent} className='relative z-10' />
            <img src={dot} className='absolute -bottom-20 -left-24 z-0' />
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