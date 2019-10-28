import React from 'react';
import { StyleSheet,TextInput, View, Button, FlatList, Text, Image} from 'react-native';
import {getImageFromApi} from '../API/TMDBApi'

class MyItem extends React.Component {
   render(){
    const film=this.props.film
    return (
        <View style={styles.container}>
        <Image 
        style={styles.image}
        source={{uri:getImageFromApi(film.poster_path)}}
        />
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            </View>
            <View style={styles.footer_container}>
                <Text style={styles.date_text}>{film.release_date}</Text>
            </View>
        </View>
        
        </View>
      );
   }
}
const styles = StyleSheet.create({
    container:{
        height: 190,
        flexDirection:"row"
    },
    image:{
        width:120,
        height:180,
        margin:5,
        backgroundColor:'gray'
   
   },
   content_container:{
   flex:1,
   margin:5,
   },
   header_container:{
   flex:3,
   flexDirection:"row"
   },
   description_container:{
    flex:7   
},
   footer_container:{
   flex:1,
  },
  title_text:{
    fontWeight: 'bold',
    fontSize:20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
    },
  vote_text:{
    fontWeight: 'bold',
    fontSize:23,
    color:'#666666'
    },
  description_text:{
    fontStyle:'italic',
    color:'#666666'
    },
   date_text:{
    textAlign: 'right',
    fontSize:14
    },
    });
export default MyItem