import React, { Component } from 'react';
import { Text, FlatList, Image,  View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';
import ButtonStyledRed from '../components/ButtonStyledRed.js';
import {connect} from 'react-redux';
import {deletePet} from '../actions'

import CardPets from '../components/CardPets';


const PetDetail = props => {
    const { id, img, nomePet, porte, tutor, especie } = props.route.params.item;

    
    return (
   
        <View style={styles.container}>
            <Image 
            style={styles.avatar}
                source={{
                    uri: `data:image/jpeg;base64,${img}`                   
                }}
                resizeMode="cover"
                aspectRatio={1}
            />
            <View style={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>ID: </Text>
                    <Text style={styles.normal}> {id} -  </Text>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>{especie}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text  style={styles.bold}>Nome: </Text>
                    <Text style={styles.normal}> {nomePet}   </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text  style={styles.bold}>Porte:</Text>
                    <Text style={styles.normal}> {porte}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>Tutor:</Text>
                    <Text style={styles.normal}> {tutor}</Text>
                </View>
                <TouchableOpacity style={{paddingLeft: 10}} onPress={() => props.navigation.replace('Pet - Editar/Remover', 
                // {petToEdit:props.route.params.item}
                )}
                    // onPress={async () => {
                    // await saveAgendamento(agendamentoForm)
                    // navigation.goBack();
                    // }}
                    >
                        <ButtonStyledGreen label={'EDITAR'} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 10}} 
                    onPress={async () => {
                        const deletado = await props.deletePet(props.route.params.item);
                        if(deletado){
                            props.navigation.goBack()
                        }
                    }}  >
                        <ButtonStyledRed style={{ backgroundColor: "#E36363" }} label={'REMOVER'} />
                </TouchableOpacity>
            </View>
                        
        </View>
        )

    
}
export default connect(null,  {deletePet})(PetDetail);
const styles = StyleSheet.create({
    bold:{
        fontSize: 18, 
        fontWeight: 'bold',
        paddingBottom: 10,
    },
     normal:{
        fontSize: 18, 
        paddingBottom: 10,
    },
    avatar:{
        borderTopLeftRadius: 100/ 2,
        borderTopRightRadius: 100/ 2,
    },
    container:{
        shadowColor:"black",
        margin:40,
    },
    content:{
        padding: 30,
        backgroundColor:"white",
        height: 350,
        borderBottomLeftRadius: 100/ 2,
        borderBottomRightRadius: 100/ 2
    }
    
})

