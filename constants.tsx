
import { Hotspot, UpholsteryOption } from './types';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'base',
    x: 60,
    y: 75,
    title: 'Specs & Materials',
    description: 'Shell: Polyurethane foam with fiberglass reinforcement. Base: Satin polished aluminum. Features a swivel tilt function for ergonomic comfort.'
  },
  {
    id: 'dimensions',
    x: 40,
    y: 50,
    title: 'Dimensions',
    description: 'A sculptural presence: Total height: 107cm | Width: 86cm | Depth: 79cm.'
  },
  {
    id: 'history',
    x: 20,
    y: 20,
    title: 'Design Context',
    description: 'Designed in 1958 for the SAS Royal Hotel lobby in Copenhagen. Jacobsen created these organic curves to contrast with the building\'s rigid architectural lines.'
  }
];

export const COLORS: UpholsteryOption[] = [
  { name: 'Deep Red', color: '8B2E31', type: 'Fabric' },
  { name: 'Ochre Yellow', color: 'F1C40F', type: 'Fabric' },
  { name: 'Soft Grey', color: 'BDC3C7', type: 'Fabric' },
  { name: 'Saddle Brown', color: '5D4037', type: 'Leather' },
  { name: 'Burnt Orange', color: 'E67E22', type: 'Leather' },
  { name: 'Onyx Black', color: '1A1A1A', type: 'Leather' }
];
