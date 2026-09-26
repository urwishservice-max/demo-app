import Image from "next/image";

export default function Concept3() {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-mono overflow-hidden selection:bg-blue-500/30">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff11 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff11 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Center Crosshairs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-white/5 z-0 pointer-events-none" />

      {/* Top Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between p-6 z-20 text-[10px] tracking-[0.2em] uppercase text-cyan-400">
        <div className="flex gap-4">
          <span className="text-white">SUTÉRA</span>
        </div>
        <div className="flex flex-col items-center gap-1 border border-white/20 p-2 rounded-sm backdrop-blur-sm bg-black/40">
          <span className="opacity-50">CHANGE REALITY</span>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" className="opacity-50">
            <ellipse cx="12" cy="6" rx="8" ry="4" />
            <path d="M12 2v8M4 6h16" />
          </svg>
        </div>
        <div className="text-right flex flex-col">
          <span className="opacity-50">LOCAL TIME</span>
          <span>ZUR 05:04 AM</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center relative z-10 pt-20">
        
        {/* Massive Text Top Left */}
        <div className="absolute top-32 left-8 md:left-16 z-20 mix-blend-difference">
          <h1 className="text-5xl md:text-7xl font-sans tracking-tight font-light leading-[0.85] text-white">
            REALITY,<br />
            <span className="font-bold">BY DESIGN.</span>
          </h1>
          
          <div className="mt-8 border border-white/20 p-2 w-max backdrop-blur-md bg-black/20 flex gap-4 text-[9px] uppercase tracking-widest text-cyan-400">
            <div className="flex flex-col">
              <span className="opacity-50 mb-1">ENGAGED:</span>
              <span>HUMAN,</span>
              <span>NATURE-INSPIRED REALITY</span>
            </div>
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </div>
          </div>
        </div>

        {/* Central Glowing Image */}
        <div className="relative w-[350px] h-[350px] md:w-[700px] md:h-[700px] mix-blend-screen opacity-90 group">
          <Image
            src="/concept_3_flower.jpg"
            alt="Neon Wireframe Flower"
            fill
            className="object-contain"
            priority
          />
          
          {/* UI Nodes connected to image */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan] animate-pulse delay-75"></div>
          
          {/* SVG Connection Lines overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" viewBox="0 0 700 700">
            <polyline points="175,175 100,175 100,100" fill="none" stroke="#00ffff" strokeWidth="1" strokeDasharray="4 4" />
            <polyline points="525,466 600,466 600,500" fill="none" stroke="#00ffff" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="175" cy="175" r="4" fill="none" stroke="#ff0000" />
            <circle cx="525" cy="466" r="4" fill="none" stroke="#00ffff" />
          </svg>
        </div>

        {/* UI Overlay - Right Side Panels */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          
          {/* Status Box */}
          <div className="border border-white/20 bg-black/60 backdrop-blur-md p-4 w-64">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/10">
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">SUTÉRA</span>
              <span className="text-[8px] text-white/50">CYBER</span>
            </div>
            <div className="flex flex-col gap-1 text-[9px] text-white/80 font-sans tracking-wide">
              <div className="flex justify-between">
                <span>SU (UNDERNEATH)</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span>TÉRA (EARTH)</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
              <p className="mt-2 text-[8px] text-white/40 leading-relaxed uppercase">
                = UNDERNEATH THE EARTH
              </p>
            </div>
            
            {/* Audio/Data bars */}
            <div className="flex items-end gap-1 mt-4 h-6">
              {[40, 70, 30, 90, 50, 80, 20, 60, 100, 40].map((h, i) => (
                <div key={i} className="w-1 bg-cyan-400/50 hover:bg-cyan-400 transition-all cursor-crosshair" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom UI Bar */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
          
          <div className="flex flex-col gap-2 max-w-sm">
            <span className="text-[10px] text-cyan-400 tracking-widest uppercase">[CORE THREADS OF MY WORK]</span>
            <div className="border border-white/20 bg-black/60 backdrop-blur-md p-3 flex items-start gap-4">
               <div className="w-10 h-10 border border-white/20 flex flex-col justify-between p-1">
                 <div className="w-full h-[1px] bg-white/30"></div>
                 <div className="w-full h-[1px] bg-white/30"></div>
                 <div className="w-full h-[1px] bg-white/30"></div>
                 <div className="w-[1px] h-full absolute left-1/2 top-0 bg-white/30"></div>
               </div>
               <div className="flex flex-col text-[8px] text-white/60 tracking-widest font-sans uppercase gap-1">
                 <p className="text-white">01.[UI/UX/VR/AR] ---<br/>PERCEPTUAL INTERFACES</p>
                 <p>02.[----------------]<br/>EMBODIMENT</p>
                 <p>03.[----------------]<br/>UI & AI</p>
                 <p>04.[----------------]<br/>SYSTEM AND TOOLS</p>
               </div>
            </div>
          </div>

          <div className="border border-white/20 bg-black/60 backdrop-blur-md p-4 max-w-[250px] text-[9px] text-white/70 font-sans leading-relaxed">
            <div className="flex justify-between items-center mb-2 pb-1 border-b border-white/10 uppercase tracking-widest">
              <span className="text-cyan-400 font-bold text-[10px]">NOT A STUDIO - JUST ME</span>
            </div>
            <p className="mb-2">
              I'm Stella Mühlhaus and I currently work at Meta. On the side I give talks, workshops, and mentor, as well as writing on design and technology.
            </p>
            <div className="flex gap-2 text-cyan-400 uppercase font-bold tracking-widest text-[8px]">
              <span className="border border-white/20 px-1 hover:bg-white/10 cursor-pointer">LINKEDIN</span>
              <span className="border border-white/20 px-1 hover:bg-white/10 cursor-pointer">MEDIUM</span>
              <span className="border border-white/20 px-1 hover:bg-white/10 cursor-pointer">INSTAGRAM</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
