import React from 'react';
import { StyleSheet,TextInput, View, Button, FlatList, Text} from 'react-native';
import films from '../Helpers/films'
import MyItem from './MyItem';
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi';
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = { films: [],
      }
      this.searchedText=""

    }
    _loadFilms(){
        if(this.searchedText.length>0){
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({films: data.results}))
        }
    }
    _searchTextInputChanged(text){
        this.searchedText = text
    }
    render(){
        console.log('render')
        return (
            <View style={styles.main_style}>
             <TextInput onSubmitEditing={()=> this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} placeholder="title of the movie" style={styles.Textinput}></TextInput>
             <Button style={{height:50}} title="Search" onPress={()=>this._loadFilms()}/>
             <FlatList 
             data={this.state.films}
             keyExtractor={(item)=> item.id.toString()}
             renderItem={({item})=><MyItem film={item}/>}
             ></FlatList>
            </View>
          )
    }
}

const styles = StyleSheet.create({
    main_style:{
        marginTop: 20,
    },
   Textinput:{
    marginLeft: 5,
    marginRight: 5,
    height:50, 
    borderColor:'#222222',
    paddingLeft:5,
   }
  });
export default Search
