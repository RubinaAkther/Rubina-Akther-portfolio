import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';

import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import './globals.css';

export default function Home() {
  return (
    <main
      style={{ backgroundColor: '#000319' }}
      className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-15 px-5 overflow-x-hidden"
    >
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
