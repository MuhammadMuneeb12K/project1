import Image from 'next/image';
import img from '../app/image/image-removebg-preview.png'

export default function Personal_Description(){
  return(
    <body>
      <div className='body'>
      <div>
      <h1 className="name">Muhammad Muneeb Khan</h1>
      </div>
      <div>
        <h3 className="my_intro">I am a professional Python Developer and currently learning Next.js and <br /> Data Science</h3>
      </div>
      <div className='image'>
        <Image src={img} alt = "/" />
      </div>
      </div>
    </body>
  )
}
