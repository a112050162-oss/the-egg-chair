
import React from 'react';
import { Hotspot } from '../types';

interface HotspotMarkerProps {
  hotspot: Hotspot;
  onClick: (hotspot: Hotspot) => void;
}

export const HotspotMarker: React.FC<HotspotMarkerProps> = ({ hotspot, onClick }) => {
  return (
    <button
      onClick={() => onClick(hotspot)}
      className="absolute z-10 w-6 h-6 flex items-center justify-center group focus:outline-none transition-transform hover:scale-125"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
    >
      <span className="absolute w-full h-full rounded-full bg-[#8B2E31] hotspot-pulse"></span>
      <span className="relative w-2 h-2 rounded-full bg-white"></span>
      <span className="absolute hidden group-hover:block top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-[10px] px-2 py-1 rounded tracking-widest uppercase">
        {hotspot.title}
      </span>
    </button>
  );
};
