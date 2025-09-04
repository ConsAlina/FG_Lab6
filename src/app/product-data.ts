export interface Model {
  brand: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  location: string;
  details: string;
  models: Model[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Monitors",
    location: "SM Baguio",
    details: "High-resolution monitors suitable for gaming and work",
    models: [
      { brand: "Acer 24\" 1080p", price: 8000 },
      { brand: "ASUS 27\" 144Hz", price: 12000 },
      { brand: "LG 27\" 2K", price: 10000 },
      { brand: "Samsung Odyssey G5 32\"", price: 18000 },
      { brand: "BenQ Zowie XL2411K", price: 9500 }
    ]
  },
  {
    id: 2,
    name: "MotherBoards",
    location: "SM Baguio",
    details: "Durable motherboards with latest chipset support",
    models: [
      { brand: "ASUS B550", price: 7000 },
      { brand: "Gigabyte B760", price: 8500 },
      { brand: "MSI B450", price: 6200 },
      { brand: "ASRock Z690", price: 12500 },
      { brand: "ASUS X570", price: 11000 },
      { brand: "Gigabyte X670 AORUS", price: 15000 },
      { brand: "MSI Z790 Tomahawk", price: 16000 }
    ]
  },
  {
    id: 3,
    name: "Processors",
    location: "SM Baguio",
    details: "Chipsets for Intel & AMD builds",
    models: [
      { brand: "Intel Core i5-12400F", price: 15000 },
      { brand: "Intel Core i7-13700K", price: 22000 },
      { brand: "Ryzen 5 5600X", price: 14000 },
      { brand: "Ryzen 7 7800X3D", price: 26000 },
      { brand: "Intel Core i9-13900K", price: 35000 },
      { brand: "Ryzen 9 7900X", price: 39000 }
    ]
  },
  {
    id: 4,
    name: "RAM",
    location: "SM Baguio",
    details: "Fast memory kits for smoother multitasking",
    models: [
      { brand: "Corsair Vengeance 16GB", price: 3200 },
      { brand: "Kingston Fury 16GB", price: 3000 },
      { brand: "G.SKILL Ripjaws 32GB", price: 6200 },
      { brand: "ADATA XPG Lancer 32GB DDR5", price: 10500 },
      { brand: "TeamGroup T-Force Delta RGB 16GB", price: 3800 },
      { brand: "Crucial Ballistix 16GB", price: 3400 }
    ]
  },
  {
    id: 5,
    name: "GPU",
    location: "SM Baguio",
    details: "Powerful graphics cards for gaming and design",
    models: [
      { brand: "ASUS RTX 3060", price: 25000 },
      { brand: "MSI RTX 3070", price: 32000 },
      { brand: "Gigabyte RTX 3080", price: 40000 },
      { brand: "ZOTAC RTX 4070 Ti", price: 49000 },
      { brand: "Sapphire RX 6700 XT", price: 28000 },
      { brand: "ASRock RX 6800", price: 35000 }
    ]
  },
  {
    id: 6,
    name: "Cases",
    location: "SM Baguio",
    details: "Mid & full tower cases with modern airflow designs",
    models: [
      { brand: "NZXT H510", price: 4500 },
      { brand: "Lian Li Lancool 215", price: 5200 },
      { brand: "Fractal Design Meshify 2", price: 8800 },
      { brand: "Cooler Master NR600", price: 4200 },
      { brand: "Phanteks Eclipse P400A", price: 4800 },
      { brand: "Thermaltake View 71", price: 10000 }
    ]
  },
  {
    id: 7,
    name: "PSU",
    location: "SM Baguio",
    details: "Reliable power supplies for stable performance",
    models: [
      { brand: "Corsair 650W 80+ Gold", price: 5200 },
      { brand: "Seasonic 750W 80+ Gold", price: 6800 },
      { brand: "EVGA 850W 80+ Platinum", price: 9500 },
      { brand: "Cooler Master MWE 650", price: 4200 },
      { brand: "Thermaltake Toughpower 850W", price: 9000 },
      { brand: "Corsair TX750M", price: 6400 }
    ]
  },
  {
    id: 8,
    name: "Keyboards",
    location: "SM Baguio",
    details: "Mechanical keyboards built for speed and comfort",
    models: [
      { brand: "Logitech G Pro", price: 5500 },
      { brand: "Razer BlackWidow", price: 6000 },
      { brand: "Keychron K2", price: 4200 },
      { brand: "SteelSeries Apex Pro", price: 10500 },
      { brand: "Corsair K95 RGB", price: 8900 },
      { brand: "Ducky One 2 Mini", price: 5200 }
    ]
  },
  {
    id: 9,
    name: "Mouse",
    location: "SM Baguio",
    details: "High-precision mice for gaming and productivity",
    models: [
      { brand: "Logitech G502", price: 3200 },
      { brand: "Razer DeathAdder", price: 2900 },
      { brand: "Glorious Model O", price: 3500 },
      { brand: "Logitech MX Master 3", price: 7000 },
      { brand: "Razer Viper Mini", price: 2200 },
      { brand: "SteelSeries Rival 3", price: 2600 },
      { brand: "Zowie EC2", price: 2800 },
      { brand: "Corsair M65 RGB", price: 4500 }
    ]
  },
  {
    id: 10,
    name: "Headsets",
    location: "SM Baguio",
    details: "Wired & wireless headsets with clear sound and comfort",
    models: [
      { brand: "HyperX Cloud II", price: 4500 },
      { brand: "SteelSeries Arctis 7", price: 6500 },
      { brand: "Sony WH-CH720N", price: 7800 },
      { brand: "Corsair HS80 Wireless", price: 8900 },
      { brand: "Razer Kraken V3", price: 5000 },
      { brand: "Sennheiser HD 599", price: 8200 },
      { brand: "Logitech G935", price: 7600 }
    ]
  }
];

export function getProductById(id: number) {
  return PRODUCTS.find(p => p.id === id);
}
