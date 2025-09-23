import React from "react";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";

interface ItemProps {
  key: number,
  image: string;
  name: string;
  shopName: string;
}

export default function Item({ image, name, shopName }: ItemProps) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{shopName}</Text>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Chat</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    paddingHorizontal: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  shop: {
    fontSize: 14,
    color: "gray",
  },
  btn: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
