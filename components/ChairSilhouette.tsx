
import React from 'react';

interface ChairSilhouetteProps {
  color: string;
}

export const ChairSilhouette: React.FC<ChairSilhouetteProps> = ({ color }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <div className="relative w-[80%] aspect-[0.85/1] flex flex-col items-center">
        
        {/* The Main Shell */}
        <div 
          className="relative w-full h-[85%] transition-colors duration-1000 ease-in-out"
          style={{ 
            backgroundColor: `#${color}`,
            borderRadius: '50% 50% 45% 45% / 70% 70% 30% 30%',
            boxShadow: `inset 0 -20px 40px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.05)`
          }}
        >
          {/* Inner "Scoop" Shadow for Depth */}
          <div 
            className="absolute inset-[10%] opacity-20"
            style={{ 
              backgroundColor: 'black',
              borderRadius: '50% 50% 45% 45% / 80% 80% 20% 20%',
              filter: 'blur(10px)'
            }}
          />
          
          {/* Wing Detail (Left) */}
          <div 
            className="absolute top-[15%] -left-[5%] w-[40%] h-[50%] transition-colors duration-1000"
            style={{ 
              backgroundColor: `#${color}`,
              borderRadius: '100% 0% 0% 100% / 50% 0% 0% 50%',
              transform: 'rotate(-10deg)',
              boxShadow: '-5px 5px 15px rgba(0,0,0,0.1)'
            }}
          />
          
          {/* Wing Detail (Right) */}
          <div 
            className="absolute top-[15%] -right-[5%] w-[40%] h-[50%] transition-colors duration-1000"
            style={{ 
              backgroundColor: `#${color}`,
              borderRadius: '0% 100% 100% 0% / 0% 50% 50% 0%',
              transform: 'rotate(10deg)',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Stem */}
        <div className="w-4 h-[10%] bg-[#BDC3C7] mt-[-2px] relative z-[-1]" />

        {/* 4-Star Base */}
        <div className="relative w-[60%] h-[5%] flex justify-center">
          {/* Main Horizontal Bar */}
          <div className="absolute w-full h-2 bg-[#BDC3C7] rounded-full top-0" />
          {/* Perspective Legs */}
          <div className="absolute w-[80%] h-2 bg-[#A0A0A0] rounded-full top-1 rotate-[20deg]" />
          <div className="absolute w-[80%] h-2 bg-[#A0A0A0] rounded-full top-1 rotate-[-20deg]" />
        </div>
      </div>
    </div>
  );
};
