import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../src/config/firebase";
import { colors } from "../../src/theme/colors";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/(tabs)");
    } catch (e: any) {
      Alert.alert("Registration failed", e.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "800", marginBottom: 16, color: colors.textDark }}>
        Create Account
      </Text>

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

      <TouchableOpacity onPress={onRegister} style={s.btn}>
        <Text style={s.btnText}>Register</Text>
      </TouchableOpacity>

      <Link href="/(auth)/login" style={{ marginTop: 12, color: colors.textDark }}>
        Already have an account?{" "}
        <Text style={{ fontWeight: "700" }}>Sign in</Text>
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
