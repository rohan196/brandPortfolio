import {images} from '../constants'
const Hero = () => {
  return (
    <div className='mt-6 lg:h-[700px] w-full border-mainPink border py-3 px-8 justify-between items-center rounded-3xl'>
      <div className='flex justify-between'>
        <div className='text-area'>
          <div className=''>
            <h2>dnsdkjdjdsj</h2>
            <h1>The One Stop To All Your Web Problems</h1>
          </div>
        </div>
        <div className='img-area'>
          <img src={images.hero} width={550} />
        </div>
      </div>
    </div>
  )
}

export default Hero
