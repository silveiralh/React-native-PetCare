import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native';

const CardPets = props => {
    const { item , onPressItem, onNavigate} = props;

    return (

        <TouchableOpacity onPress={onNavigate}>
                <View key={item.nomePet} style={styles.line}>

                    <View style={styles.content}>
                        <Image 
                             style={styles.avatar}
                            source={{
                                uri: `data:image/jpeg;base64,${item.img}`
                            }
                            }
                            resizeMode="cover"
                            aspectRatio={1}
                        />
                    </View>
                    
                    <View style={styles.beginLline}>
                        
                        <Text style={styles.lineText}>{item.nomePet}</Text>
                        <Text style={styles.linePet}>{item.tutor}</Text>
                    </View>
                    <View style={styles.finalLine}>
                        <Text style={styles.lineText}>{item.porte}</Text>
                        <Text style={styles.lineAbaixo}>{item.especie}</Text>
                    </View>
                </View>
                
         </TouchableOpacity>  
    )


}

const styles = StyleSheet.create({
    
    line: {
        height: 70,
        marginTop: 20,
        marginLeft:20,
        marginRight:20,
        borderRadius: 5,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderBottomColor: '#009688',
        backgroundColor:"white"
    },
    avatar:{
        margin:8,
        marginLeft: 20,
        width: 55, 
        height:55, 
        borderRadius: 100/ 2,
    },
    content:{
flexGrow: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    beginLline: {
        flexGrow: 60,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    finaLline: {
        flexGrow: 1,
        marginBottom:10,
        textAlign: "right",
        flexDirection: 'row-reverse',
    },
    lineText: {
        padding:4,
        flexGrow: 3,
        paddingLeft: 15,
        justifyContent: 'space-between',
        fontSize: 16,
        fontWeight: 'bold',
        color: "#63E3B5",
        paddingRight: 15,
        paddingBottom: -15,
        marginBottom:-12,

    },
    linePet: {
        
        flexGrow:1 ,
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#a2a2a2"

    }, lineAbaixo: {
        
        flexGrow:1 ,
                paddingLeft: 15,
        paddingRight: 15,
        fontSize: 14,
        textAlign: "right",
        color: "#B0B0B0",
        paddingBottom:2,
    }
});


export default CardPets;