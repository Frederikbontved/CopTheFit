import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import Post from "./components/Post";
import Separator from "./components/Separator";
import { OUTFITS } from "./OUTFITS";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={OUTFITS}
        renderItem={({ index }) => <Post outfit={OUTFITS[index]} />}
        keyExtractor={(_, i) => i}
        ItemSeparatorComponent={<Separator />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
