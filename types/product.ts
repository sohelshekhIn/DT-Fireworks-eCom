export interface Product {
  id: string;
  product_id: number;
  name: string;
  // slug: string;
  // description: string;
  price: number;
  images: string[];
  categories: string[];
  // rating: number;
  // stock: number;
  // onSale: boolean;
  discount: {
    id: string;
    name: string;
    value: number; // percentage
  };
}
