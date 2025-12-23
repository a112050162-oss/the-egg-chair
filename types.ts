
export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

export interface UpholsteryOption {
  name: string;
  color: string; // hex
  type: 'Leather' | 'Fabric';
}
