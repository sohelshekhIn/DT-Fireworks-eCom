"use client";

import { CoupanCode } from "@/types/coupan";
import { CartProduct, Product } from "@/types/product";
import { set } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
interface ShopContextType {
  qty: number;
  increaseQty: () => void;
  decreaseQty: () => void;
  addProductToCart: (product: Product) => void;
  cartItems: CartProduct[];
  updateProductQty: (
    id: CartProduct["id"],
    operation: "increase" | "decrease"
  ) => void;
  removeProductFromCart: (id: CartProduct["id"]) => void;
  coupanCode: CoupanCode | null;
  setCoupanCode: React.Dispatch<React.SetStateAction<CoupanCode | null>>;
  cartTotal: number;
  coupanDiscount: number;
  cartSavings: number;
  orderTotal: number;
  shippingCharge: number;
  gstAmount: number;
}

const ShopContext = createContext<ShopContextType | null>(null);
export const ShopContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0); // total of only products
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartSavings, setCartSavings] = useState<number>(0);
  const [coupanCode, setCoupanCode] = useState<CoupanCode | null>(null);
  const [orderTotal, setOrderTotal] = useState<number>(0); // total after coupan, tax, shipping etc
  const [qty, setQty] = useState<number>(1);
  const [coupanDiscount, setCoupanDiscount] = useState<number>(0);
  const [gstAmount, setGstAmount] = useState<number>(0); // GST amount [18%
  const gstRate = 18; // 18% GST (HSN: 3604 - 10, SAC: 996-1-1)
  const shippingCharge = 50; // ₹50 shipping charge

  const increaseQty = () => {
    setQty((prevQty) => {
      if (prevQty < 20) {
        return prevQty + 1;
      }
      return prevQty;
    });
  };
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty > 1) {
        return prevQty - 1;
      }
      return prevQty;
    });
  };

  const getProductPrice = (product: Product) => {
    let price = product.price;
    if (product.discount) {
      price = product.price * (1 - product.discount.value / 100);
    }
    return price;
  };

  const addProductToCart = (product: Product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + qty,
                total: item.total + getProductPrice(product) * qty,
              }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          ...product,
          quantity: qty,
          total: getProductPrice(product) * qty,
        },
      ]);
    }
    toast.success("Product added to cart");
  };

  const updateProductQty = (
    id: CartProduct["id"],
    operation: "increase" | "decrease"
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (operation === "increase" && item.quantity < 20) {
            return {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + getProductPrice(item),
            };
          } else if (operation === "decrease" && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              total: item.total - getProductPrice(item),
            };
          }
        }
        return item;
      })
    );
  };

  const removeProductFromCart = (id: CartProduct["id"]) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    const total = cartItems.reduce((acc, item) => acc + item.total, 0);
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const savings = cartItems.reduce((acc, item) => {
      // sometimes discount is null
      if (!item.discount) {
        return acc;
      }
      const discount = item.discount.value;
      const price = item.price;
      const quantity = item.quantity;
      const total = price * quantity;
      const discountAmount = (total * discount) / 100;
      return acc + discountAmount;
    }, 0);

    setCartTotal(total);
    setCartCount(count);
    setCartSavings(savings);
    setQty(1);
  }, [cartItems]);

  useEffect(() => {
    if (!coupanCode && cartTotal != 0) {
      // if coupan is removed
      setCoupanDiscount(0);
      return;
    }
    if (!coupanCode) return; // if no coupan code
    if (cartTotal < coupanCode.minOrderValue) {
      setCoupanCode(null);
      setCoupanDiscount(0);
      toast.error(
        `Coupan code is valid for orders above ₹${coupanCode.minOrderValue} only`
      );
    }
    let discountAmount = coupanCode.discount;
    if (coupanCode.isPercentage) {
      discountAmount = (cartTotal * coupanCode.discount) / 100;
    }
    if (discountAmount > coupanCode.maxDiscount) {
      discountAmount = coupanCode.maxDiscount;
    }

    setCoupanDiscount(discountAmount);
  }, [cartItems, coupanCode]);

  useEffect(() => {
    if (cartTotal === 0) {
      return;
    }
    // round up to 2 decimal places
    const gstAmount = Math.round(
      (cartTotal - coupanDiscount) * (gstRate / 100)
    );
    setOrderTotal(cartTotal - coupanDiscount + gstAmount + shippingCharge);
    setGstAmount(gstAmount);
  }, [cartTotal, coupanDiscount]);

  useEffect(() => {
    if (!coupanDiscount) {
      return;
    }
    setCartSavings((prev) => prev + coupanDiscount);
  }, [coupanDiscount]);

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        addProductToCart,
        cartItems,
        updateProductQty,
        removeProductFromCart,
        coupanCode,
        setCoupanCode,
        cartTotal,
        coupanDiscount,
        cartSavings,
        orderTotal,
        gstAmount,
        shippingCharge,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the ShopContext
export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};
