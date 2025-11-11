import { Redirect } from "expo-router";
import React, { useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";

export default function Index() {
  const { user, booted } = useContext(AuthContext);

  if (!booted) return null;

  return user ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(auth)/welcome" />
  );
}
