export interface Product {
  id: string;
  product_id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  // rating: number;
  // stock: number;
  discount: {
    id: string;
    name: string;
    value: number; // percentage
  };
}
