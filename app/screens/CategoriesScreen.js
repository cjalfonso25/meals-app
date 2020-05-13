import React from "react";
import { View, Text } from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
