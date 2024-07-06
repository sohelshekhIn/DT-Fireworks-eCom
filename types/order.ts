import { CartProduct } from "./product";

export interface Order {
  id: string;
  uid: string;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  cartSavings: number;
  coupanDiscount: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  orderStatus: "pending" | "confirmed" | "prepared" | "shipped" | "delivered";
  cartItems: CartProduct[];
  cartCount: number;
  cartTotal: number;
  gstAmount: number;
  delivery: {
    deliveryDate: string;
    deliveryStatus: "pending" | "prepared" | "shipped" | "delivered";
    isDelivered: boolean;
  };
}

export interface OrderOverview {
  orderId: string;
  orderDate: string;
  orderTotal: number;
}
