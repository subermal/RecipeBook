import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { colors } from "../../src/theme/colors";

export default function Welcome() {
  return (
    <View style={{ flex:1, backgroundColor: colors.background, justifyContent:"center", alignItems:"center", padding:24 }}>
      <Text style={{ fontSize:32, fontWeight:"800", color: colors.textDark, marginBottom:8 }}>RecipeBook</Text>
      <Text style={{ textAlign:"center", color: colors.textLight, marginBottom:24 }}>Save, browse, and cook. Simple and fast.</Text>

      <Link href="/(auth)/login" asChild>
        <TouchableOpacity style={{ backgroundColor: colors.primary, paddingVertical:12, paddingHorizontal:20, borderRadius:10, marginBottom:10 }}>
          <Text style={{ color:"#fff", fontWeight:"700" }}>Sign In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(auth)/register" asChild>
        <TouchableOpacity style={{ borderWidth:1, borderColor:"#ddd", paddingVertical:12, paddingHorizontal:20, borderRadius:10 }}>
          <Text style={{ fontWeight:"700", color: colors.textDark }}>Create Account</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
