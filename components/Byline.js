import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function Byline() {
  return (
    <View style={styles.byline}>
      <View style={styles.left}>
        <View style={styles.avatar} />
        <View style={styles.meta}>
          <Text style={styles.name}>Frederik Larsen</Text>
          <Text style={styles.date}>13/11/2017</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Entypo name="dots-three-horizontal" size={24} color="#3a3a3a" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  byline: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ececec",
    marginRight: 16,
  },
  meta: {},
  name: {
    color: "#3A3A3A",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#3A3A3A",
    fontSize: 14,
  },
  right: {
    borderLeftWidth: 1,
    borderLeftColor: "#ececec",
    paddingLeft: 16,
    justifyContent: "center",
  },
});
