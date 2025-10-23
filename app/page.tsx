import Hero from "@/components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import Footer from '../components/Footer';
import {navItems} from '@/data';

export default function Home() {
  return (
    <main className="relative bg-gray-900 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
       <Hero/>
       <Grid/>
       <RecentProjects/>
       <Footer/>
      </div>
    </main>
  );
}
