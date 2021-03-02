import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native';

const CardServicos = props => {
    const { item , onPressItem} = props;

    return (

        <TouchableOpacity onPress={ () =>{onPressItem()}}>
            <View key={item.nomeServico} style={styles.line}>
                <View style={styles.beginLline}> 
                    <Text style={styles.lineText}>{item.nomeServico}</Text>
                    <Text style={styles.lineTempo}>{item.tempoEstimado}</Text>
                </View>
                <View style={styles.finalLine}>
                    <Text style={styles.lineAbaixo}>{item.valor}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    line: {
        height: 75,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        borderBottomWidth: 1,
        alignItems: "baseline",
        flexDirection: 'row',
        borderBottomColor: '#009688',
        backgroundColor: "white"
    },
    beginLline: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    finaLline: {
        flexGrow: 1,
        textAlign: "right",
        alignSelf: "flex-end",
        flexDirection: 'row-reverse',
    },
    lineText: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#63E3B5"

    },
    lineTempo: {
        padding: 5,
        paddingTop: 2,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#a2a2a2"

    }, lineAbaixo: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#E36363"
    }
});


export default CardServicos;