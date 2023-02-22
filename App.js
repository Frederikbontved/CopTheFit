import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import Post from "./components/Post";
import Separator from "./components/Separator";

const OUTFITS = [1, 2];

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList
        data={OUTFITS}
        renderItem={() => <Post />}
        keyExtractor={(_, i) => i}
        ItemSeparatorComponent={<Separator />}
      />
      <StatusBar style="auto" />
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
