import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result);

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.info}>Price: {result.price}</Text>
      <Text style={styles.info}>
        {result.rating} stars with {result.review_count} reviews
      </Text>
      <Text style={styles.info}>Call: {result.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "100",
    alignSelf: "center",
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  info: {
    margin: 10,
    fontSize: 16,
  },
});

export default ResultsShowScreen;
