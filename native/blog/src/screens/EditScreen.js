import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function EditScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);

  const { title, body } = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      initialValues={{ title, body }}
      onSubmit={(title, body) => {
        editBlogPost(id, title, body, () => navigation.pop());
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default EditScreen;
