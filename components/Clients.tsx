import { companies, testimonials } from '@/data';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

function Clients() {
  return (
    <div className="pt-20" id="testimonials">
      <div className="heading text-4xl font-bold text-center pb-10">
        Kind words from{' '}
        <span className="text-purple-300"> Satisfied Clients</span>
      </div>
      <div className="flex flex-col items-center ">
        <div className='h-[50vh] md:h-120 rounded-md flex flex-col antialiased items-center relative overflow-hidden '>
           <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16  mt-10 '>
          {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5'/><img src={nameImg} alt={name} className='md:w-24 w-20' />
            </div>
            
          ))}
        </div>
        </div>
        
       
      </div>
    </div>
  );
}

export default Clients;
