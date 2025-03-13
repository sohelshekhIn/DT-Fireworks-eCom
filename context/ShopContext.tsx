"use client";

import { CouponCode } from "@/types/coupon";
import { CartProduct, Product } from "@/types/product";
import {
  LoadedCartData,
  LoadedCartDataFlags,
  ShopContextType,
} from "@/types/shop";
import { loadData, saveData } from "@/utils/syncCartData";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const [couponCode, setCouponCode] = useState<CouponCode | null>(null);
  const [orderTotal, setOrderTotal] = useState<number>(0); // total after coupon, tax, shipping etc
  const [qty, setQty] = useState<number>(1);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [gstAmount, setGstAmount] = useState<number>(0); // GST amount
  const gstRate = 18; // 18% GST (HSN: 3604 - 10, SAC: 996-1-1)
  const shippingCharge = 50; // ₹50 shipping charge

  const [dataLoadedFromServer, setLoadedFromServer] =
    useState<LoadedCartDataFlags>({
      cartItems: false,
      cartTotal: false,
      cartCount: false,
      cartSavings: false,
      couponDiscount: false,
      couponCode: false,
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
    if (loadedData.data.couponCode) {
      setCouponCode(loadedData.data.couponCode);
      setCouponDiscount(loadedData.data.couponDiscount || 0);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        couponCode: true,
        couponDiscount: true,
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
    if (loadedData.data.state && loadedData.data.pincode) {
      setState(loadedData.data.state);
      setPincode(loadedData.data.pincode);
      setLoadedFromServer({
        ...dataLoadedFromServer,
        state: true,
        pincode: true,
      });
    }
  };

  useEffect(() => {
    updateCartData(); // load cart data from server if cart session exists
  }, []);

  const resetCart = () => {
    setCartItems([]);
    setCartTotal(0);
    setCartCount(0);
    setCartSavings(0);
    setCouponCode(null);
    setCouponDiscount(0);
    setOrderTotal(0);
    setGstAmount(0);
  };

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
    if (!couponCode && cartTotal != 0) {
      // if coupon is removed
      setCartSavings((prev) => prev - couponDiscount);
      setCouponDiscount(0);
      saveData({
        cartSavings: 0,
        couponDiscount: null,
      });
      return;
    }

    // check if useEffect has been triggered by server data
    if (dataLoadedFromServer.couponCode) {
      // set dataLoadedFromServer to false for partial data
      setLoadedFromServer({
        ...dataLoadedFromServer,
        couponCode: false,
      });
      return;
    }

    if (!couponCode) return; // if no coupon code
    if (cartTotal < couponCode.minOrderValue) {
      setCouponCode(null);
      setCouponDiscount(0);
      saveData({
        couponCode: null,
        couponDiscount: 0,
      });
      toast.error(
        `Coupon code is valid for orders above ₹${couponCode.minOrderValue} only`,
      );
    }
    let discountAmount = couponCode.discount;
    if (couponCode.isPercentage) {
      discountAmount = (cartTotal * couponCode.discount) / 100;
    }
    if (discountAmount > couponCode.maxDiscount) {
      discountAmount = couponCode.maxDiscount;
    }

    setCouponDiscount(discountAmount);
    saveData({
      couponDiscount: discountAmount,
    });
  }, [cartItems, couponCode]);

  useEffect(() => {
    if (cartTotal === 0) {
      return;
    }

    // check if useEffect has been triggered by server data
    // if (dataLoadedFromServer.couponDiscount) {
    //   // set dataLoadedFromServer to false for partial data
    //   setLoadedFromServer({
    //     ...dataLoadedFromServer,
    //     couponDiscount: false,
    //     cartSavings: false,
    //     orderTotal: false,
    //     gstAmount: false,
    //   });
    //   return;
    // }

    // round up to 2 decimal places
    const tmpgstAmount = Math.round(
      (cartTotal - couponDiscount) * (gstRate / 100),
    );
    saveData({
      cartSavings: cartSavings + couponDiscount,
    });
    setCartSavings((prev) => prev + couponDiscount);
    setOrderTotal(cartTotal - couponDiscount + gstAmount + shippingCharge);
    setGstAmount(tmpgstAmount);
    saveData({
      orderTotal: cartTotal - couponDiscount + gstAmount + shippingCharge,
      gstAmount: tmpgstAmount,
      shippingCharge,
    });
  }, [cartTotal, couponDiscount]);

  // useEffect(() => {
  //   // also handle case when coupon is removed
  //   if (cartTotal === 0) {
  //     return;
  //   }
  //   saveData({
  //     cartSavings: cartSavings + couponDiscount,
  //   });
  //   setCartSavings((prev) => prev + couponDiscount);
  // }, [couponDiscount]);

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
        couponCode,
        setCouponCode,
        cartTotal,
        couponDiscount,
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
        resetCart,
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
