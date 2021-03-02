import React, { Component } from 'react';
import { Text, FlatList,  View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';
import CardPets from '../components/CardPets';
import {connect} from 'react-redux';
import {watchPets} from '../actions';


class PetsPage extends Component{
    componentDidMount(){
        this.props.watchPets();
    }

    render(){
        return(
             <View >
        <TouchableOpacity style={styles.margem} onPress={() => this.props.navigation.navigate('Pet - Editar/Remover')}>
            <ButtonStyledGreen
                label={"ADICIONAR PET"} />
        </TouchableOpacity>
        <FlatList 
            data={[...this.props.pets]}
            renderItem={({item}) =>{
                return (
                    <CardPets item={item} 
                    onNavigate={ () => this.props.navigation.navigate('Pet - Detalhes', {item:item})}/>
                )
            }}
            keyExtractor={item=> item.id.toString()}
        />
    </View>

        )
    }

}
   
const styles = StyleSheet.create({
    margem: {
        flexGrow: 1,
        alignItems: "center",
        paddingTop: 20,
        marginBottom: -10
    }
})

const mapStateToProps =state=>{
    const{petsList} = state;
    const keys = Object.keys(petsList);
    const listaPetsID = keys.map(key=>{
        return {...petsList[key], id:key}
    })
    return {pets:listaPetsID};
}
export default connect(mapStateToProps, {watchPets})(PetsPage)
// export default PetsPage