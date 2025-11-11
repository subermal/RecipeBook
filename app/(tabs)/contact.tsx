import React, { useContext } from "react";
import { Button, Linking, Text, View } from "react-native";
import { AuthContext } from "../../src/context/AuthContext";
import { colors } from "../../src/theme/colors";

export default function Contact() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ flex:1, backgroundColor: colors.background, justifyContent:"center", padding:24 }}>
      <Text style={{ fontSize:24, fontWeight:"800", color: colors.textDark, marginBottom:8 }}>Contact</Text>
      <Text style={{ color: colors.textDark }}>Name: Suber Mal</Text>
      <Text style={{ color: colors.textDark }}>Phone Number: +358451323097</Text>
      <Text style={{ color: colors.textDark, marginTop:12 }}>Email: suber.mal@student.laurea.fi</Text>
      <View style={{ height:12 }} />
      <Button title="Email Me" onPress={() => Linking.openURL("mailto:suber.mal@student.laurea.fi")} />
      <View style={{ height:12 }} />
      <Button title="Log out" color="#ff3b30" onPress={logout} />
    </View>
  );
}
