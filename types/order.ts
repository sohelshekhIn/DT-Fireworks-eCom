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
  orderStatus: ORDER_STATUS;
  cartItems: CartProduct[];
  cartCount: number;
  cartTotal: number;
  gstAmount: number;
  orderTotal: number;
  delivery: {
    deliveryDate: string;
    deliveryStatus: DELIVERY_STATUS;
    isDelivered: boolean;
  };
}

export enum ORDER_STATUS {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  PREPARED = "PREPARED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export enum DELIVERY_STATUS {
  PENDING = "PENDING",
  PREPARED = "PREPARED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export interface OrderOverview {
  orderId: string;
  orderDate: string;
  orderTotal: number;
}
