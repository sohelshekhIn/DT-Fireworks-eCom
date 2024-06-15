"use client";

export const saveData = async (data: any) => {
  fetch("/api/cart/sync", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
};
