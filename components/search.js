import React from 'react';
import { TextInput, View, Button  } from 'react-native';

export default function Search() {
  return (
    <View style={{ marginTop: 20}}>
     <TextInput placeholder="titre du film" style={styles.Textinput}></TextInput>
     <Button title="Rechercher" onPress={()=>{}}/>
    </View>
  );
}

const styles = {
   Textinput:{
    marginLeft: 5,
    height:50, 
    borderColor:'#222222',
    paddingLeft:5,
   }
  };