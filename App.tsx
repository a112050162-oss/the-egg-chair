
import React, { useState, useCallback } from 'react';
import { HOTSPOTS, COLORS } from './constants';
import { Hotspot, UpholsteryOption } from './types';
import { HotspotMarker } from './components/HotspotMarker';
import { ColorPicker } from './components/ColorPicker';
import { ChairSilhouette } from './components/ChairSilhouette';
import { X, Info } from 'lucide-react';

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<UpholsteryOption>(COLORS[0]);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const handleHotspotClick = useCallback((hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#8B2E31] selection:text-white px-6 md:px-12 py-8 md:py-16 overflow-x-hidden">
      {/* Background Decorative Text */}
      <div className="fixed top-8 right-8 text-xs font-semibold opacity-30 select-none tracking-widest hidden lg:block">
        A4 - 1 / 1958
      </div>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Header Section */}
        <section className="lg:col-span-5 space-y-8 animate-fade-in">
          <div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-none tracking-tighter mb-4">
              egg <br /> chair
            </h1>
            <p className="text-xl md:text-2xl font-serif italic opacity-80 border-b border-[#333333]/20 pb-6">
              A Timeless Danish Design Icon
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8B2E31]">Designed by</h2>
            <p className="text-2xl md:text-4xl font-serif">Arne Jacobsen</p>
            <p className="text-sm leading-relaxed text-gray-600 font-light">
              Commissioned for the SAS Royal Hotel in Copenhagen, Jacobsen's Egg chair is a masterpiece of fluid geometry and functional elegance.
            </p>
          </div>

          <div className="hidden lg:block pt-10">
            <ColorPicker selected={selectedColor} onSelect={setSelectedColor} />
            <div className="mt-4 animate-pulse">
              <p className="text-[10px] uppercase tracking-widest text-[#8B2E31] font-bold">
                Upholstery: {selectedColor.name} ({selectedColor.type})
              </p>
            </div>
          </div>
        </section>

        {/* Central Display Section */}
        <section className="lg:col-span-7 relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white/5 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 group flex items-center justify-center">
            
            {/* The CSS Chair Silhouette */}
            <div className="w-full h-full p-12 transition-all duration-700 ease-in-out">
              <ChairSilhouette color={selectedColor.color} />
            </div>

            {/* Overlay Hotspots */}
            <div className="absolute inset-0">
              {HOTSPOTS.map((h) => (
                <HotspotMarker key={h.id} hotspot={h} onClick={handleHotspotClick} />
              ))}
            </div>

            {/* Mobile/Tablet Color Selector */}
            <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl">
              <ColorPicker selected={selectedColor} onSelect={setSelectedColor} />
            </div>
          </div>

          {/* Dimension Labels */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 vertical-text hidden xl:flex flex-col items-center opacity-30 select-none">
            <span className="text-[10px] uppercase tracking-widest mb-4">Total Height 107cm</span>
            <div className="h-40 w-[1px] bg-black"></div>
          </div>
          <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center opacity-30 select-none">
            <div className="w-40 h-[1px] bg-black"></div>
            <span className="text-[10px] uppercase tracking-widest mt-4">Width 86cm</span>
          </div>
        </section>
      </main>

      {/* Detail Grid Section */}
      <section className="max-w-7xl mx-auto mt-24 lg:mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[#333333]/10 pt-16">
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#8B2E31]">Materials</h3>
          <ul className="text-sm space-y-3 font-light">
            <li className="flex gap-2"><span className="font-semibold">•</span> Shell: Polyurethane foam</li>
            <li className="flex gap-2"><span className="font-semibold">•</span> Fiberglass reinforcement</li>
            <li className="flex gap-2"><span className="font-semibold">•</span> Upholstery: Hand-stitched</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#8B2E31]">Mechanical</h3>
          <ul className="text-sm space-y-3 font-light">
            <li className="flex gap-2"><span className="font-semibold">•</span> Satin polished aluminum base</li>
            <li className="flex gap-2"><span className="font-semibold">•</span> Swivel mechanism</li>
            <li className="flex gap-2"><span className="font-semibold">•</span> Integrated tilt function</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#8B2E31]">Context</h3>
          <p className="text-sm font-light leading-relaxed">
            The SAS Royal Hotel was the world's first designer hotel. Jacobsen designed everything from the building to the cutlery.
          </p>
        </div>
        <div className="flex items-end justify-start lg:justify-end">
          <div className="text-right">
             <span className="text-5xl font-serif">1958</span>
             <p className="text-[10px] uppercase tracking-widest mt-1 opacity-50">Copenhagen, Denmark</p>
          </div>
        </div>
      </section>

      {/* Info Modal */}
      {activeHotspot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm animate-fade-in" onClick={() => setActiveHotspot(null)}>
          <div 
            className="bg-[#F5E6E3] border border-white max-w-md w-full p-8 rounded-3xl shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveHotspot(null)}
              className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#8B2E31] text-white p-1.5 rounded-lg">
                <Info size={18} />
              </div>
              <h3 className="text-xl font-serif font-bold">{activeHotspot.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-light">
              {activeHotspot.description}
            </p>
            <button 
              onClick={() => setActiveHotspot(null)}
              className="mt-8 w-full bg-[#333333] text-white text-xs uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-[#8B2E31] transition-all"
            >
              Close Details
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 mb-8 text-center opacity-30 text-[10px] uppercase tracking-widest font-semibold">
        &copy; {new Date().getFullYear()} Fritz Hansen Tribute &bull; Jacobsen Archive
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default App;
