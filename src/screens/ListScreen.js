import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 27 },
    { name: "Friend 2", age: 30 },
    { name: "Friend 3", age: 50 },
    { name: "Friend 4", age: 16 },
    { name: "Friend 5", age: 18 },
    { name: "Friend 6", age: 25 },
    { name: "Friend 7", age: 23 },
    { name: "Friend 8", age: 40 },
    { name: "Friend 9", age: 39 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.listText}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listText: {
    marginVertical: 50,
  },
});

export default ListScreen;
