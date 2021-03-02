import React, { Component } from 'react';
import { Text, FlatList, Image,  View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledRed from '../components/ButtonStyledRed';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import {connect} from 'react-redux';
import {deleteAgendamento} from '../actions'



const AgendamentoDetail = props => {
    const { id, nomePet, servico, data, hora } = props.route.params.item;

    
    return (
   
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.titulo}>
                    {nomePet} 
                </Text>
            </View>
            <View style={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>ID: </Text>
                    <Text style={styles.normal}> {id}   </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text  style={styles.bold}>Serviço: </Text>
                    <Text style={styles.normal}> {servico}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>Data: </Text>
                    <Text style={styles.normal}> {data}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>Hora: </Text>
                    <Text style={styles.normal}> {hora}</Text>
                </View>
                <TouchableOpacity style={{paddingLeft: 10}} onPress={() => props.navigation.replace('Agendamento - Editar/Remover')
                    // onPress={async () => {
                    // await saveAgendamento(agendamentoForm)
                    // navigation.goBack();
                    // }
                    }>
                        <ButtonStyledGreen label={'EDITAR'} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 10}} 
                    onPress={async () => {
                        const deletado = await props.deleteAgendamento(props.route.params.item);
                        if(deletado){
                            props.navigation.goBack()
                        }
                    }}>
                        <ButtonStyledRed style={{ backgroundColor: "#E36363" }} label={'REMOVER'} />
                </TouchableOpacity>
            </View>
                        
        </View>
        )

    
}
export default connect(null, {deleteAgendamento})(AgendamentoDetail);
const styles = StyleSheet.create({
    bold:{
        fontSize: 18, 
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    titulo:{
        margin:3,
        fontSize: 31,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: "white",
        textAlign: 'center',
    },
     normal:{
        fontSize: 18, 
        paddingBottom: 10,
    },
    top:{
        justifyContent: 'space-around',
        borderTopLeftRadius: 100/ 2,
        height: 100,
        backgroundColor:"#63E3B5",
        borderTopRightRadius: 100/ 2,
    },
    container:{
        shadowColor:"black",
        margin:40,
    },
    content:{
        padding: 30,
        backgroundColor:"white",
        height: 330,
        borderBottomLeftRadius: 100/ 2,
        borderBottomRightRadius: 100/ 2
    }
    
})

