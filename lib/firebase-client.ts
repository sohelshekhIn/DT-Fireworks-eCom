"use client";

import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "./firebase-config";

var currentUser: User | null = null;

onAuthStateChanged(auth, (user) => {
  currentUser = user;
});

export { currentUser };
