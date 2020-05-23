import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as BoardContext } from "../context/BoardContext";

function AllBoardsScreen(props) {
  const { state, createBoard, getBoards } = useContext(BoardContext);
  const { navigate } = props.navigation;

  //console.log("allboards - ", state);

  useEffect(() => {
    console.log("here");
    getBoards();

    const listener = props.navigation.addListener("didFocus", () => {
      getBoards();
    });

    return () => {
      return listener;
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>All Boards</Text>
      <FlatList
        data={state.boards}
        keyExtractor={(board) => board.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.boardButton}
              onPress={() => navigate("Board", { id: item.id })}
            >
              <Text style={styles.boardName}>{item.name}</Text>
              <Text style={styles.boardDescription}>{item.description}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Create Board"
        onPress={() => createBoard("test board name", "test board description")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  boardButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
  boardName: {},
  boardDescription: {},
});

export default AllBoardsScreen;
