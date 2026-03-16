/* eslint-disable @next/next/no-img-element */
import { certificates, companies } from '@/data'; // Change testimonials to certificates
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

function Certifications() {
  return (
    <div className="py-20" id="certifications">
      <div className="heading text-4xl font-bold text-center pb-10">
        Academic & Professional{' '}
        <span className="text-purple-300">Certifications</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-120 rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={certificates}
            direction="left"
            speed="slow"
          />
        </div>

        {/* Optional: You can keep the company logos or remove this div if not needed */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex md:max-w-60 max-w-32 gap-2 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Certifications;
