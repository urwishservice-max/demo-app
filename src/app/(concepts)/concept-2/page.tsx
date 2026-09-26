import Image from "next/image";
import Link from "next/link";

export default function Concept2() {
  return (
    <div className="min-h-screen bg-white relative flex flex-col font-sans overflow-hidden">
      
      {/* Top Navigation */}
      <header className="w-full flex justify-between items-center p-6 md:p-10 text-[10px] md:text-xs font-semibold tracking-widest text-black z-20 absolute top-0 left-0 right-0">
        <div className="flex items-center gap-2">
          <span className="tracking-tighter">•••</span>
          <span className="uppercase">Business Areas</span>
        </div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-gray-500 transition-colors uppercase">Press Center</Link>
          <Link href="#" className="hover:text-gray-500 transition-colors uppercase">Contacts</Link>
        </div>
        <div className="flex gap-6 items-center">
          <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
            {/* simple user icon placeholder */}
            <div className="w-2 h-2 bg-black rounded-full mb-1"></div>
          </div>
          <div className="flex flex-col gap-[3px] w-5 cursor-pointer">
            <span className="w-full h-[1px] bg-black"></span>
            <span className="w-full h-[1px] bg-black"></span>
            <span className="w-full h-[1px] bg-black"></span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center relative pt-20">
        
        {/* Subtitle Top Left */}
        <div className="absolute top-32 md:top-40 left-6 md:left-10 text-sm md:text-lg font-medium text-black max-w-[200px] leading-tight z-20">
          We process two main groups of raw materials
        </div>

        {/* Central 3D Image */}
        <div className="relative z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] -mb-20 md:-mb-32 group">
          <Image
            src="/concept_2_mineral.jpg"
            alt="Mineral Ore"
            fill
            className="object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-3"
            priority
          />
        </div>

        {/* Massive Typography */}
        <h1 className="text-[120px] md:text-[250px] lg:text-[350px] font-bold tracking-tighter text-black leading-none z-0 select-none mix-blend-darken -mt-10 md:-mt-20">
          Minera
        </h1>

        {/* Navigation & Controls Bottom Center */}
        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 z-20">
          <nav className="flex flex-col items-center gap-2 text-[10px] md:text-xs text-gray-400">
            <Link href="#" className="hover:text-black transition-colors">Logistics</Link>
            <Link href="#" className="hover:text-black transition-colors">Acceptance</Link>
            <Link href="#" className="hover:text-black transition-colors">Analysis</Link>
            <Link href="#" className="hover:text-black transition-colors">Refining</Link>
            <Link href="#" className="text-black transition-colors">Finished products</Link>
          </nav>
          
          {/* Controls */}
          <div className="flex gap-8 items-center mt-4">
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Pagination Bottom Right */}
      <div className="absolute bottom-10 right-10 z-20 select-none">
        <span className="text-[80px] md:text-[120px] font-light tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px black" }}>
          01
        </span>
      </div>

    </div>
  );
}
