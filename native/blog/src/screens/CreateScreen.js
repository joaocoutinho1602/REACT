import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, body) => {
        addBlogPost(title, body, () => navigation.navigate("Index"));
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default CreateScreen;
