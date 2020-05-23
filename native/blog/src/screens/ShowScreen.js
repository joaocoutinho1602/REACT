import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

function ShowScreen({ navigation }) {
  const { state } = useContext(BlogContext);

  const id = navigation.getParam("id");
  const post = state.find((item) => item.id === id);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" style={styles.headerRight} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
    fontSize: 30,
  },
  view: {
    backgroundColor: "pink",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    alignSelf: "flex-start",
    padding: 5,
  },
  body: {
    fontSize: 16,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    alignSelf: "flex-start",
    padding: 5,
  },
});

export default ShowScreen;
