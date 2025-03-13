import { CartProduct, Product } from "@/types/product";
import { CouponCode } from "@/types/coupon";

export interface ShopContextType {
  qty: number;
  increaseQty: () => void;
  decreaseQty: () => void;
  addProductToCart: (product: Product) => void;
  cartItems: CartProduct[];
  updateProductQty: (
    id: CartProduct["id"],
    operation: "increase" | "decrease",
  ) => void;
  removeProductFromCart: (id: CartProduct["id"]) => void;
  couponCode: CouponCode | null;
  setCouponCode: React.Dispatch<React.SetStateAction<CouponCode | null>>;
  cartTotal: number;
  couponDiscount: number;
  cartSavings: number;
  orderTotal: number;
  shippingCharge: number;
  gstAmount: number;
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  state: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAddressLine1: React.Dispatch<React.SetStateAction<string>>;
  setAddressLine2: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setPincode: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleReview: () => boolean;
  resetCart: () => void;
}

export interface LoadedCartData {
  cartItems?: CartProduct[];
  cartTotal?: number;
  cartCount?: number;
  cartSavings?: number;
  couponDiscount?: number;
  couponCode?: CouponCode | null;
  orderTotal?: number;
  gstAmount?: number;
  name?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  pincode?: string;
  city?: string;
  state?: string;
}

export type LoadedCartDataFlags = {
  [K in keyof LoadedCartData]: boolean;
};
