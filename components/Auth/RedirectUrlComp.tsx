"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const UserLoginRedirectLink = ({
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
  }, [path, linkFor, searchParams]);
  return (
    <Link
      className="font-medium text-primary decoration-2 hover:underline dark:text-primary"
      href={link}
    >
      {linkFor === "signin" ? "Sign up here" : "Sign in here"}
    </Link>
  );
};

export const UserLoginRedirectFlow = ({
  linkFor,
}: {
  linkFor: "signup" | "signin";
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserLoginRedirectLink linkFor="signin" />
    </Suspense>
  );
};
