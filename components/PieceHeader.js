import { StyleSheet, Text, View } from "react-native";

export default function PieceHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.brand}>Bianca Chandon</Text>
      <Text style={styles.name}>Lover Hoodie blue</Text>
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
