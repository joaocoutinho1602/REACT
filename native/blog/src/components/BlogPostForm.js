import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title);
  const [body, setBody] = useState(initialValues.body);

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(title) => setTitle(title)}
        style={styles.input}
      />
      <Text style={styles.label}>Body:</Text>
      <TextInput
        value={body}
        onChangeText={(body) => setBody(body)}
        style={styles.input}
      />
      <Button title="Save Post" onPress={() => onSubmit(title, body)} />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    body: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  label: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 10,
  },
});

export default BlogPostForm;
