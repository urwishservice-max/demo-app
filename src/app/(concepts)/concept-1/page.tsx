import Image from "next/image";

export default function Concept1() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] relative overflow-hidden flex flex-col items-center justify-center p-8 font-sans" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')" }}>
      
      {/* Background Text Elements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div className="relative w-full max-w-5xl h-full">
          <h1 className="absolute top-1/4 left-10 md:left-20 text-6xl md:text-8xl font-bold tracking-tighter text-black flex items-start">
            Vision<span className="text-3xl ml-1">°</span>
          </h1>
          <h2 className="absolute top-1/3 right-10 md:right-32 text-5xl md:text-7xl font-bold tracking-tighter text-black flex items-start">
            Mission<span className="text-2xl ml-1">°</span>
          </h2>
          <div className="absolute top-[45%] right-10 md:right-32 w-64 text-xs text-gray-700 leading-tight">
            We focus on helping corporations and projects achieve their financial goals, whilst holding ourselves to the highest standards. We manage our company with a long-term approach by creating and maintaining personal partnerships based on trust.
          </div>
        </div>
      </div>

      {/* Central Image */}
      <div className="relative z-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] mix-blend-multiply opacity-90 -mt-32">
        <Image
          src="/concept_1_rock.jpg"
          alt="Floating Rock"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Lower Section */}
      <div className="relative z-20 w-full max-w-4xl mt-12 flex flex-col gap-8">
        <h3 className="text-center text-sm font-bold tracking-widest text-black mb-8">OUR VALUES</h3>

        {/* List Items */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-start w-full md:w-2/3 ml-0 md:ml-12 relative group cursor-pointer">
            <div className="bg-[#111111] text-white flex divide-x divide-gray-700 transition-transform group-hover:scale-[1.02]">
              <div className="p-4 md:p-6 font-bold w-32 flex items-center">Team</div>
              <div className="p-4 md:p-6 text-xs text-gray-400 w-64 md:w-80 flex items-center leading-relaxed">
                International team of top talents with diversified experience support clients on every step.
              </div>
            </div>
            {/* Small decorative rock offset */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-16 mix-blend-multiply opacity-80 z-[-1] pointer-events-none hidden md:block">
               <Image src="/concept_1_rock.jpg" alt="" fill className="object-cover rounded-full" />
            </div>
          </div>

          <div className="flex justify-end w-full md:w-2/3 ml-auto mr-0 md:mr-12 relative group cursor-pointer">
            <div className="bg-[#111111] text-white flex divide-x divide-gray-700 transition-transform group-hover:scale-[1.02]">
              <div className="p-4 md:p-6 font-bold w-32 flex items-center">Partners</div>
              <div className="p-4 md:p-6 text-xs text-gray-400 w-64 md:w-80 flex items-center leading-relaxed">
                Extensive network of trustful service providers is our asset.
              </div>
            </div>
             {/* Small decorative rock offset */}
             <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-20 h-20 mix-blend-multiply opacity-80 z-[-1] pointer-events-none hidden md:block rotate-90">
               <Image src="/concept_1_rock.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="flex justify-start w-full md:w-2/3 ml-0 md:ml-32 relative group cursor-pointer">
            <div className="bg-[#111111] text-white flex divide-x divide-gray-700 transition-transform group-hover:scale-[1.02]">
              <div className="p-4 md:p-6 font-bold w-32 flex items-center">Impact</div>
              <div className="p-4 md:p-6 text-xs text-gray-400 w-64 md:w-80 flex items-center leading-relaxed">
                Evident positive impact on climate and communities through our projects and initiatives.
              </div>
            </div>
             {/* Small decorative rock offset */}
             <div className="absolute left-1/4 -bottom-10 w-12 h-16 mix-blend-multiply opacity-80 z-[-1] pointer-events-none hidden md:block rotate-[45deg]">
               <Image src="/concept_1_rock.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center relative overflow-hidden mix-blend-multiply">
                    <Image src="/concept_1_rock.jpg" alt="" fill className="object-cover scale-150" />
                </div>
                <div className="text-[10px] text-gray-600 max-w-[200px]">
                    Listed securities, Swiss custody, international clearing (DVP)
                </div>
            </div>
            <div className="flex flex-col gap-1 items-start md:items-end font-bold text-4xl md:text-5xl tracking-tighter">
                <span className="text-black">Versatility</span>
                <span className="text-black">Security</span>
                <span className="text-black">Transparency</span>
                <span className="text-black">Liquidity</span>
            </div>
        </div>
      </div>
    </div>
  );
}
