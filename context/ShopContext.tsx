"use client";

import { CoupanCode } from "@/types/coupan";
import { CartProduct, Product } from "@/types/product";
import { loadData, saveData } from "@/utils/syncCartData";

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
    operation: "increase" | "decrease",
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
}

interface LoadedCartData {
  cartItems?: CartProduct[];
  cartTotal?: number;
  cartCount?: number;
  cartSavings?: number;
  coupanDiscount?: number;
  coupanCode?: CoupanCode | null;
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

type LoadedCartDataFlags = {
  [K in keyof LoadedCartData]: boolean;
};

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
  const [gstAmount, setGstAmount] = useState<number>(0); // GST amount
  const gstRate = 18; // 18% GST (HSN: 3604 - 10, SAC: 996-1-1)
  const shippingCharge = 50; // ₹50 shipping charge

  const [dataLoadedFromServer, setLoadedFromServer] =
    useState<LoadedCartDataFlags>({
      cartItems: false,
      cartTotal: false,
      cartCount: false,
      cartSavings: false,
      coupanDiscount: false,
      coupanCode: false,
      orderTotal: false,
      gstAmount: false,
      name: false,
      email: false,
      phone: false,
      addressLine1: false,
      addressLine2: false,
      city: false,
      pincode: false,
      state: false,
    });

  // Checkout functions
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  // loading cart data from server if cart session exists
  const updateCartData = async () => {
    const loadedData: {
      data?: LoadedCartData;
    } = await loadData();
    if (!loadedData || !loadedData.data) {
      return;
    }
    if (loadedData.data.cartItems) {
      setCartItems(loadedData.data.cartItems);
      setCartTotal(loadedData.data.cartTotal || 0);
      setCartCount(loadedData.data.cartCount || 0);
      setCartSavings(loadedData.data.cartSavings || 0);
      setOrderTotal(loadedData.data.orderTotal || 0);
      setGstAmount(loadedData.data.gstAmount || 0);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        cartItems: true,
        cartTotal: true,
        cartCount: true,
        cartSavings: true,
        orderTotal: true,
        gstAmount: true,
      });
    }
    if (loadedData.data.coupanCode) {
      setCoupanCode(loadedData.data.coupanCode);
      setCoupanDiscount(loadedData.data.coupanDiscount || 0);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        coupanCode: true,
        coupanDiscount: true,
      });
    }
    if (loadedData.data.name) {
      setName(loadedData.data.name);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        name: true,
      });
    }
    if (loadedData.data.email) {
      setEmail(loadedData.data.email);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        email: true,
      });
    }
    if (loadedData.data.phone) {
      setPhone(loadedData.data.phone);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        phone: true,
      });
    }
    if (loadedData.data.addressLine1) {
      setAddressLine1(loadedData.data.addressLine1);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        addressLine1: true,
      });
    }
    if (loadedData.data.addressLine2) {
      setAddressLine2(loadedData.data.addressLine2);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        addressLine2: true,
      });
    }
    if (loadedData.data.city) {
      setCity(loadedData.data.city);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        city: true,
      });
    }
    if (loadedData.data.state) {
      setState(loadedData.data.state);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        state: true,
      });
    }
  };

  useEffect(() => {
    updateCartData();
  }, []);

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
            : item,
        ),
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
    if (cartItems.length != 0) {
      saveData({
        cartItems: cartItems,
      });
    }
    toast.success("Product added to cart");
  };

  const updateProductQty = (
    id: CartProduct["id"],
    operation: "increase" | "decrease",
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
      }),
    );
    saveData({
      cartItems: cartItems,
    });
  };

  const removeProductFromCart = (id: CartProduct["id"]) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    saveData({
      cartItems: cartItems,
    });
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }

    // check if useEffect has been triggered by server data
    if (dataLoadedFromServer.cartItems) {
      // set dataLoadedFromServer to false for partial data
      setLoadedFromServer({
        ...dataLoadedFromServer,
        cartItems: false,
        cartTotal: false,
        cartCount: false,
      });
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
    saveData({
      cartItems: cartItems,
      cartTotal: total,
      cartCount: count,
      cartSavings: savings,
    });
  }, [cartItems]);

  useEffect(() => {
    if (!coupanCode && cartTotal != 0) {
      // if coupan is removed
      setCartSavings((prev) => prev - coupanDiscount);
      setCoupanDiscount(0);
      saveData({
        cartSavings: 0,
        coupanDiscount: null,
      });
      return;
    }

    // check if useEffect has been triggered by server data
    if (dataLoadedFromServer.coupanCode) {
      // set dataLoadedFromServer to false for partial data
      setLoadedFromServer({
        ...dataLoadedFromServer,
        coupanCode: false,
      });
      return;
    }

    if (!coupanCode) return; // if no coupan code
    if (cartTotal < coupanCode.minOrderValue) {
      setCoupanCode(null);
      setCoupanDiscount(0);
      saveData({
        coupanCode: null,
        coupanDiscount: 0,
      });
      toast.error(
        `Coupan code is valid for orders above ₹${coupanCode.minOrderValue} only`,
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
    saveData({
      coupanDiscount: discountAmount,
    });
  }, [cartItems, coupanCode]);

  useEffect(() => {
    if (cartTotal === 0) {
      return;
    }

    // check if useEffect has been triggered by server data
    if (dataLoadedFromServer.coupanDiscount) {
      // set dataLoadedFromServer to false for partial data
      setLoadedFromServer({
        ...dataLoadedFromServer,
        coupanDiscount: false,
        cartSavings: false,
        orderTotal: false,
        gstAmount: false,
      });
      return;
    }

    // round up to 2 decimal places
    const tmpgstAmount = Math.round(
      (cartTotal - coupanDiscount) * (gstRate / 100),
    );
    saveData({
      cartSavings: cartSavings + coupanDiscount,
    });
    setCartSavings((prev) => prev + coupanDiscount);
    setOrderTotal(cartTotal - coupanDiscount + gstAmount + shippingCharge);
    setGstAmount(tmpgstAmount);
    saveData({
      orderTotal: cartTotal - coupanDiscount + gstAmount + shippingCharge,
      gstAmount: tmpgstAmount,
    });
  }, [cartTotal, coupanDiscount]);

  // useEffect(() => {
  //   // also handle case when coupan is removed
  //   if (cartTotal === 0) {
  //     return;
  //   }
  //   saveData({
  //     cartSavings: cartSavings + coupanDiscount,
  //   });
  //   setCartSavings((prev) => prev + coupanDiscount);
  // }, [coupanDiscount]);

  const handleReview = () => {
    if (cartItems.length === 0) {
      toast.error("Empty Cart: Add products to cart first");
      return false;
    }
    if (name === "" || email === "" || phone === "") {
      toast.error("Invalid Form: Contact details are required");
      return false;
    }
    if (addressLine1 === "" || city === "" || state === "" || pincode === "") {
      toast.error("Invalid Form: Address details are required");
      return false;
    }
    // sync data to server
    saveData({
      name,
      email,
      phone,
      addressLine1,
      addressLine2,
      city,
      pincode,
      state,
    });
    return true;
  };

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
        name,
        email,
        phone,
        addressLine1,
        addressLine2,
        city,
        pincode,
        state,
        setName,
        setEmail,
        setPhone,
        setAddressLine1,
        setAddressLine2,
        setCity,
        setState,
        setPincode,
        handleReview,
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
