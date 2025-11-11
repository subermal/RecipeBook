import React, { useCallback, useContext } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import AuthProvider, { AuthContext } from "../src/context/AuthContext";

SplashScreen.preventAutoHideAsync();

function Gate({ children }: { children: React.ReactNode }) {
  const { booted } = useContext(AuthContext);
  const onLayout = useCallback(() => { if (booted) SplashScreen.hideAsync(); }, [booted]);
  if (!booted) return <View style={{ flex:1 }} />;
  return <View onLayout={onLayout} style={{ flex:1 }}>{children}</View>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Gate>
        <Stack screenOptions={{ headerShown: false }} />
      </Gate>
    </AuthProvider>
  );
}
