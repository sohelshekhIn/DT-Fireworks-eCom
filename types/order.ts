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
  couponDiscount: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  shippingCharge: number;
  orderStatus: "pending" | "confirmed" | "prepared" | "shipped" | "delivered";
  cartItems: CartProduct[];
  cartCount: number;
  cartTotal: number;
  gstAmount: number;
  orderTotal: number;
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
