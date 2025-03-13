type CouponCode = {
  code: string;
  name: string;
  discount: number;
  isPercentage: boolean;
  minOrderValue: number;
  maxDiscount: number;
};

export { type CouponCode };
