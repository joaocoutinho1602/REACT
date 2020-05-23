import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ActiveScreen(props) {
  return (
    <SafeAreaView>
      <Text>Active Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //container: { flex: 1, borderWidth: 1, borderColor: "black", marginTop: 40 },
});

export default ActiveScreen;
