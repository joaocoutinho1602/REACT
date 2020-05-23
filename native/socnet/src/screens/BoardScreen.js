import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context as BoardContext } from "../context/BoardContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

function BoardScreen(props) {
  const { state } = useContext(BoardContext);
  const { navigate } = props.navigation;

  const boardID = props.route.params.id;

  props.navigation.setOptions({
    headerTitle: `Board ${boardID}`,
    headerRight: () => <HeaderRight />,
  });

  console.log("board - ", state);

  const posts = state.boards.filter((board) => board.id === boardID)[0].posts;

  console.log("posts", posts);

  return (
    <View>
      <Text>Board Screen {props.route.params.id}</Text>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.boardButton}
              onPress={() => navigate("Post", { id: item.id })}
            >
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postContent}>{item.content}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

function HeaderRight() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("New Post", { id: route.params.id })}
    >
      <Feather name="plus" style={styles.header} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 30, marginHorizontal: 5 },
  boardButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
  postTitle: {},
  postContent: {},
});

export default BoardScreen;
