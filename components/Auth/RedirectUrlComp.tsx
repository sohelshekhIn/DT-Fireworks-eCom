"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const UserLoginRedirectFlow = ({
  linkFor,
}: {
  linkFor: "signup" | "signin";
}) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const [link, setLink] = useState("");
  useEffect(() => {
    setLink(
      (linkFor === "signin" ? "/signup" : "/signin") +
        (searchParams.has("redirect")
          ? "?redirect=" + searchParams.get("redirect")
          : ""),
    );
  }, [path]);
  return (
    <Link
      className="font-medium text-primary decoration-2 hover:underline dark:text-primary"
      href={link}
    >
      {linkFor === "signin" ? "Sign up here" : "Sign in here"}
    </Link>
  );
};
