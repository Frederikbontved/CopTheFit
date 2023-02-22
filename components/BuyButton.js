import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BuyButton() {
  return (
    <Pressable style={styles.buyButton}>
      <Text style={styles.buyButtonText}>Find it on Grailed.</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buyButton: {
    backgroundColor: "#3a3a3a",
    alignItems: "center",
    padding: 16,
    margin: 16,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
