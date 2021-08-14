import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {CATEGORIES} from '../data/dummy-data'



const CategoriesScreen = props =>{
    const renderGridItem=(itemData)=>{
    return (
    <TouchableOpacity  style={styles.gridItem} onPress={()=>{
        props.navigation.navigate({routeName:'CategoryMeals',
        params:{categoryId:itemData.item.id}
        })}}>
    <View style={{...styles.container,...{backgroundColor:itemData.item.color}}}>
        <Text style={{fontSize:22,textAlign:'right'}}>{itemData.item.title}</Text>
    </View>
    </TouchableOpacity>
    );
}
 return(
 <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
);
};

CategoriesScreen.navigationOptions={
    headerStyle:{
        backgroundColor:'blue'
    },
    headerTintColor:'white'
}
const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
gridItem:{
    flex:1,
    margin:15,
    height:150,

},
container:{
    flex:1,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    elevation:3,
    padding:15,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    
}
});

export default CategoriesScreen;