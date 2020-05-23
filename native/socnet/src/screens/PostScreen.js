import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context as BoardContext } from "../context/BoardContext";

function PostScreen(props) {
  const { state } = useContext(BoardContext);

  let myMap = new Map();

  const postID = props.route.params.id;

  props.navigation.setOptions({
    headerTitle: `Post ${postID}`,
  });
  return (
    <View>
      <Text>Post Screen</Text>
      <Text>{}</Text>
    </View>
  );
}

export default PostScreen;
