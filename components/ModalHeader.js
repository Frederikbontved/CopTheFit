import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ModalHeader({ closeModal }) {
  return (
    <View style={styles.modalHeader}>
      <Text style={styles.pieceType}>Actual hoodie</Text>
      <Feather name="info" size={16} color="white" />
      <Feather
        name="x"
        size={32}
        color="white"
        style={styles.closeButton}
        onPress={() => closeModal()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pieceType: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  closeButton: {
    position: "absolute",
    right: 16,
  },
});
