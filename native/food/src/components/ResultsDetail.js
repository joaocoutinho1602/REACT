import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ResultsDetail({ result, style }) {
  return (
    <View style={style}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.about}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  about: {
    marginLeft: 10,
  },
});

export default ResultsDetail;
