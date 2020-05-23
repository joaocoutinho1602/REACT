import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Input, Block } from "galio-framework";
import MultiSelect from "react-native-multiple-select";
import { Context as BoardContext } from "../context/BoardContext";

function NewPostScreen(props) {
  const [selectedValue, setSelectedValue] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { state, addPost } = useContext(BoardContext);
  const boards = state.boards;

  function onItemSelect(boardName) {
    setSelectedValue(boardName);
  }

  //   useEffect(() => {
  //     setSelectedValue(
  //       props.route.params
  //         ? boards.filter((board) => board.id === props.route.params.id)[0].name
  //         : ""
  //     );
  //   }, []);

  return (
    <View style={styles.container}>
      <Text>New Post Screen</Text>
      <Input
        placeholder="Post Title"
        rounded
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Input
        placeholder="Post Content"
        rounded
        multiline
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <MultiSelect
        hideTags
        hideDropdown
        items={boards}
        uniqueKey="id"
        onSelectedItemsChange={onItemSelect}
        selectedItems={selectedValue}
        single
        styleDropdownMenu={styles.menu}
        styleDropdownMenuSubsection={styles.menuSub}
        styleInputGroup={styles.input}
        styleItemsContainer={styles.item}
        styleSelectorContainer={styles.selectorContainer}
        styleTextDropdownSelected={styles.inner}
      />
      <Button
        title="Submit Post"
        onPress={() => {
          addPost(parseInt(selectedValue), { title, content });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 10, marginTop: 10 },
  inner: { marginHorizontal: 14 },
  input: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "gray",
  },
  item: { margin: 10 },
  menu: { marginTop: 10, marginHorizontal: 1 },
  menuSub: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
    backgroundColor: "white",
  },
  selectorContainer: {},
});

export default NewPostScreen;
