export interface Product {
  id: string;
  product_id: number;
  name: string;
  description: string;
  price: number;
  media: {
    images: string[];
    videos: string[];
  };
  categories: string[];
  // rating: number;
  // stock: number;
  discount: {
    id: string;
    name: string;
    value: number; // percentage
  };
}

export interface CartProduct extends Product {
  quantity: number;
  total: number;
}
