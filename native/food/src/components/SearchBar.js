import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <Ionicons name="ios-search" style={styles.searchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search..."
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit(term)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    marginVertical: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10, //rounded corners
    marginHorizontal: 15,
    flexDirection: "row",
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 0,
    flex: 1, //use all space,
    fontSize: 15,
  },
});

export default SearchBar;
