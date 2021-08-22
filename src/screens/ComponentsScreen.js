import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Yousef";
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle45}>Getting started with React Native</Text>
      <Text style={styles.textStyle20}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle45: {
    fontSize: 45,
  },
  textStyle20: {
    fontSize: 20,
  },
  viewStyle: {
    marginStart: "auto",
    marginEnd: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default ComponentsScreen;
