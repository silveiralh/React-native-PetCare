import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native';

const CardAgendamento = props => {
    const { item, onPressItem, onNavigate } = props;

    return (

        <TouchableOpacity onPress={onNavigate}>
            <View key={item.nomePet} style={styles.line}>
                <View style={styles.beginLline}>
                    <Text style={styles.lineText}>{item.servico}</Text>
                    <Text style={styles.linePet}>{item.nomePet}</Text>
                </View>
                <View style={styles.finalLine}>
                    <Text style={styles.lineText}>{item.data}</Text>
                    <Text style={styles.lineAbaixo}>{item.hora}</Text>
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
    linePet: {
        padding: 5,
        paddingTop: 2,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#a2a2a2"

    }, lineAbaixo: {
        paddingLeft: 15,
        paddingRight: 15,
        padding: 5,
        fontSize: 14,
        textAlign: "right",
        color: "#B0B0B0"
    }
});


export default CardAgendamento;