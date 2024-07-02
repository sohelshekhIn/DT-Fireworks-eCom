"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const RedirectToHomePage = () => {
  const [timer, setTimer] = useState(10);
  const { push } = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          push("/");
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>Redirecting back to home page in {timer} seconds</p>;
};
