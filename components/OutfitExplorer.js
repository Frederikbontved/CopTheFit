import { useState } from "react";
import { StyleSheet, View, Modal, SafeAreaView, FlatList } from "react-native";
import PieceSlider from "./PieceSlider";
import { Feather } from "@expo/vector-icons";

const PIECES = [1, 2];

export default function OutfitExplorer({ explorerOpen, closeExplorer }) {
  const [listHeight, setListHeight] = useState(100);
  const [listWidth, setListWidth] = useState(100);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event) => {
    const totalHeight = event.nativeEvent.layoutMeasurement.height;
    const yPos = event.nativeEvent.contentOffset.y;
    const current = Math.floor(yPos / totalHeight);
    setCurrentIndex(current);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={explorerOpen}
        onRequestClose={() => {
          closeExplorer();
        }}
      >
        <View style={styles.modalView}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: "green", zIndex: 1 }}>
              <Feather
                name="x"
                size={32}
                color="white"
                style={styles.closeButton}
                onPress={() => {
                  closeExplorer();
                }}
              />
            </View>

            <View style={styles.verticalFlatListContainer}>
              <View style={styles.piecePaginationContainer}>
                {PIECES.map((_, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles.piecePagination,
                        currentIndex === index
                          ? styles.piecePaginationActive
                          : {},
                      ]}
                    />
                  );
                })}
              </View>
              <FlatList
                data={PIECES}
                keyExtractor={(_, index) => index}
                renderItem={() => (
                  <View
                    style={[
                      styles.pieceContainer,
                      { width: listWidth, height: listHeight },
                    ]}
                  >
                    <PieceSlider width={listWidth} />
                  </View>
                )}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                pagingEnabled
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout;
                  setListHeight(height);
                  setListWidth(width);
                }}
                onScroll={onScroll}
                bounces={false}
              />
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    right: 16,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  },
  buttonOpen: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  verticalFlatListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  pieceContainer: {
    justifyContent: "center",
  },
  piecePaginationContainer: {},
  piecePagination: {
    width: 8,
    height: 100,
    backgroundColor: "#888",
    marginVertical: 4,
  },
  piecePaginationActive: {
    backgroundColor: "white",
  },
});
