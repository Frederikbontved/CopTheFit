import { StyleSheet, Text, View } from "react-native";

export default function PieceHeader({ brand, name }) {
  return (
    <View style={styles.header}>
      <Text style={styles.brand}>{brand}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  brand: {
    fontSize: 18,
    fontWeight: "500",
  },
  name: {
    fontSize: 16,
  },
});
