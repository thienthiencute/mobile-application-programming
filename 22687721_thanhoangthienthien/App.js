import { View, TouchableOpacity, Text, StyleSheet, TextInput, Image } from 'react-native';

export default function App() {
  return (
    
   <View style={styles.container}>
    <View style={styles.resultContainer}>
      <Text style={styles.resultContainer} >
      <Text style= {styles.resultText}>0  </Text></Text>
    </View>
    <View style= {styles.buttonContainer}>
     <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>C</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>/</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>*</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>-</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>7</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>8</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>9</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>4</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>5</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>6</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>1</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>2</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>3</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>0</Text> </TouchableOpacity> 
      <TouchableOpacity style={styles.button}><Text style= {styles.buttonText}>=</Text>
    </TouchableOpacity> 
    </View>
    
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  resultContainer:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20
  },
  resultText: {
    fontSize:50,
    color:'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  button: {
   width: "25%",
   height:80,
   justifyContent: 'center',
   alignItems:'center',
   
  },

 
  buttonText: {
    
    fontSize: 25,
    textAlign: 'center'
  }
  

});