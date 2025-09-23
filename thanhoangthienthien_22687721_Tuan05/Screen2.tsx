import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, TextInput } from 'react-native';

// Bạn có thể import các module hỗ trợ từ npm
import { Card } from 'react-native-paper';

import Item from './components/Item';

const data = [
  {
    path: require("./assets/giacchuyen.png")
  },
  {
    path: require("./assets/daynguon.png")
  },
  {
    path: require("./assets/dauchuyendoipsps2.png")
  },
  {
    path: require("./assets/dauchuyendoi.png")
  },
  {
    path: require("./assets/carbusbtops2.png")
  },
  {
    path: require("./assets/daucam.png")
  },
]

export default function Screen2() {

  useEffect(() => {
    fetch("https://68ca078b430c4476c348089e.mockapi.io/api/products")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Image source={require("./assets/ant-design_arrow-left-outlined.png")} />
        <View style={styles.input}>
          <Image source={require("./assets/whh_magnifier.png")} />
          <TextInput placeholder={"Dây cáp usb"} style={{color: "gray"}} />
        </View>
        <Image source={require("./assets/bi_cart-check.png")} />
        <Image source={require("./assets/ba+cham.png")} />
      </View>
 
        <ScrollView style={styles.scrollView}>
            <FlatList data={data} numColumns={2} renderItem={({ item }) => (
               <View style={styles.list}>
                  <Image source={item.path} />
                  <Image resizeMode={"contain"} style={{width: 180, height: 110}} source={require("./assets/product-info.png")} />
               </View> 
            )}/>
        </ScrollView>

        <View style={styles.footer}>
            <Image source={require("./assets/setting-icon.png")} />
            <Image style={{width: 25, height: 25}} source={require("./assets/home-icon.png")} />
            <Image source={require("./assets/back-icon.png")} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1BA9FF",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  list: {
    width: 220,
    paddingVertical: 10
  },
  scrollView: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: "5px 20px"
  },
  footer: {
    backgroundColor: "#1BA9FF",
    flexDirection:"row",
    justifyContent: "space-around",
    padding: "10px 20px"
  }
});
