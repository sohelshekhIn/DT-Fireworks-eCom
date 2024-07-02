"use client";

export const saveData = async (data: any) => {
  try {
    fetch("/api/cart/sync", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
  } catch (error) {
    console.error("Error while saving data", error);
  }
};

export const loadData = async () => {
  const response = await fetch("/api/cart/sync");
  if (!response.ok) {
    return {};
  }
  return response.json();
};
