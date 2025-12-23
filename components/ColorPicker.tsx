
import React from 'react';
import { UpholsteryOption } from '../types';
import { COLORS } from '../constants';

interface ColorPickerProps {
  selected: UpholsteryOption;
  onSelect: (option: UpholsteryOption) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ selected, onSelect }) => {
  const fabricColors = COLORS.filter(c => c.type === 'Fabric');
  const leatherColors = COLORS.filter(c => c.type === 'Leather');

  const SwatchGroup = ({ title, options }: { title: string, options: UpholsteryOption[] }) => (
    <div className="mb-6">
      <h4 className="text-[10px] uppercase tracking-[0.2em] mb-3 text-gray-500 font-semibold">{title}</h4>
      <div className="flex gap-4">
        {options.map((opt) => (
          <button
            key={opt.color}
            onClick={() => onSelect(opt)}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
              selected.color === opt.color ? 'border-[#333333] scale-110' : 'border-transparent'
            }`}
            style={{ backgroundColor: `#${opt.color}` }}
            title={opt.name}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <SwatchGroup title="Kvadrat Fabric" options={fabricColors} />
      <SwatchGroup title="Classic Leather" options={leatherColors} />
    </div>
  );
};
