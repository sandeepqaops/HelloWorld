import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native'
import SampleImage from './components/SampleImage';
import SampleInput from './components/SampleInput';

const App = () => {
   return (
      <View style = {styles.container}>
         <SampleImage/>
         <SampleInput/>
      </View>
   )
}
export default App;

const styles = StyleSheet.create ({
   container: {
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#CFD8DC',
    flex:1,
    padding:50,
   }
})