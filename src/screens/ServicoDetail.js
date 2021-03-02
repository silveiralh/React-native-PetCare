import React, { Component } from 'react';
import { Text, FlatList, Image,  View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledRed from '../components/ButtonStyledRed';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import {connect} from 'react-redux';
import {deleteServico} from '../actions'

import CardServicos from '../components/CardServicos';

const ServicoDetail = props => {
    const { id, nomeServico, valor, tempoEstimado } = props.route.params.item;

    
    return (
   
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.titulo}>
                    {nomeServico} 
                </Text>
            </View>
            <View style={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bold}>ID: </Text>
                    <Text style={styles.normal}> {id}   </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text  style={styles.bold}>Valor: </Text>
                    <Text style={styles.normal}> {valor}</Text>
                </View>
                    <Text style={styles.bold}>Tempo Estimado: </Text>
                    <Text style={styles.normal}> {tempoEstimado}</Text>
                <TouchableOpacity  style={{paddingLeft: 10}} onPress={() => props.navigation.replace('Servico - Editar/Remover'
                // , {servicoToEdit: props.route.params.item}
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
                        const deletado = await props.deleteServico(props.route.params.item);
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
export default connect(null, {deleteServico})(ServicoDetail);
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
        height: 300,
        borderBottomLeftRadius: 100/ 2,
        borderBottomRightRadius: 100/ 2
    }
    
})

