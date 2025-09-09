import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";


export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <Image style={styles.image} source = {require('./assets/circle.png')} />
      <View>
        <Text style={styles.title}>GROW{'\n'} YOUR BUSSINESS</Text>
      </View>
      <View><Text style={styles.text_we}>We will help you to grow your business
            using online server</Text>
      </View>
      <View style={styles.btn_gr}>
        <TouchableOpacity style={styles.btn}> LOGIN</TouchableOpacity>
        <TouchableOpacity style={styles.btn}> SIGN UP</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container:{
     backgroundColor: '#00CCF9',
     flex : 1,
     alignItems: 'center',
     justifyContent: 'center'
   },
   image:{
      width:150,
      height:150,

   },
   title:{
     fontSize: 25,
     fontWeight: 'bold',
     textAlign: 'center',
     marginVertical: 40,
   },
   text_we:{
     fontSize: 15,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   btn_gr:{
     fontWeight: 'bold',
     flexDirection: 'row',
     justifyContent: 'space-around',
     width: '100%',
     marginTop: 40,
   },
   btn:{
     backgroundColor:'#E3C000',
     padding: 16,
     borderRadius: 5,
   }
  
});
