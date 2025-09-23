import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';

// Bạn có thể import các module hỗ trợ từ npm
import { Card } from 'react-native-paper';

import Item from './components/Item';

export default function Screen1() {
  const [data, setData] = useState<any[]>([]); 

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

          // {data.map((item, index) => (
          //   <Item
          //     key={index}
          //     image={item.image}
          //     name={item.name}
          //     shopName={item.shopName}
          //   />
          // ))}
  return (
    <>
      <View style={styles.header}>
        <Image source={require("./assets/ant-design_arrow-left-outlined.png")} />
        <Text style={{ color: "white", fontSize: 18 }}>Chat</Text>
        <Image source={require("./assets/bi_cart-check.png")} />
      </View>
      
      <Text style={{ width: "80%", alignSelf: 'center', marginVertical: 10 }}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>
      
        
        <ScrollView style={styles.scrollView}>
          <FlatList data={data} renderItem={({ item }) => 
            <Item
              key={1}
              image={item.image}
              name={item.name}
              shopName={item.shopName}
            />} />
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
  scrollView: {
    marginTop: 20,
  },
  footer: {
    backgroundColor: "#1BA9FF",
    flexDirection:"row",
    justifyContent: "space-around",
    padding: "10px 20px"
  }
});
