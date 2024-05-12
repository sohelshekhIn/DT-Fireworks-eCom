import type { Product } from "@/types/product";

const product: Product = {
  id: 1,
  name: "Product Name",
  description: "Product Description",
  slug: "product-name",
  price: 100,
  images: [
    "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80",
    "https://www.youtube.com/embed/6JYIGclVQdw",
  ],
  categories: ["Main Category", "Sub Category"],
  rating: 5,
  stock: 10,
  onSale: true,
  discount: 10,
};

const cartData = {
  id: 1,
  product: product,
  quantity: 1,
};

export { product, cartData };
