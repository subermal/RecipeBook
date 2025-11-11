import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../src/config/firebase";
import { colors } from "../../src/theme/colors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/(tabs)");
    } catch (e: any) {
      Alert.alert("Login failed", e.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "800", marginBottom: 16, color: colors.textDark }}>Sign In</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={s.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={s.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={onLogin} style={s.btn}>
        <Text style={s.btnText}>Sign In</Text>
      </TouchableOpacity>

      <Link href="/(auth)/register" style={{ marginTop: 12, color: colors.textDark }}>
        New here? <Text style={{ fontWeight: "700" }}>Create an account</Text>
      </Link>
    </View>
  );
}

const s = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#0a84ff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
  },
});
