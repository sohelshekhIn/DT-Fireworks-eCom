export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string[];
  rating: number;
  stock: number;
  onSale: boolean;
  discount: number;
}
