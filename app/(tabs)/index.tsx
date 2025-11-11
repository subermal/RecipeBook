import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../src/theme/colors";

const recipes = [
  {
    id: "1",
    title: "Classic Pancakes",
    description: "Fluffy pancakes made with eggs, milk, and syrup.",
  },
  {
    id: "2",
    title: "Spaghetti Bolognese",
    description: "Pasta served with a rich tomato and beef sauce.",
  },
  {
    id: "3",
    title: "Avocado Toast",
    description: "Toasted bread topped with mashed avocado and chili flakes.",
  },
];

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Recipes</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  header: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.textDark,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "700", color: colors.textDark },
  desc: { fontSize: 14, color: colors.textLight, marginTop: 6 },
});
