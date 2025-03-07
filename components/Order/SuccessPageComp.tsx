"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const RedirectToHomePage = () => {
  const [timer, setTimer] = useState(10);
  const { push } = useRouter();

  useEffect(() => {
    const redirect = () => {
      push("/");
    };

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          redirect();
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [push]);
  return <p>Redirecting back to home page in {timer} seconds</p>;
};
