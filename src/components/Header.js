import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

 

const Header = (props) => (
    <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>{props.label}</Text>
    </View>
);


const styles = StyleSheet.create({
    headerStyle : {
    marginTop: 1,
    height: 60,
    backgroundColor: '#e1e1e1',
    borderBottomWidth: 1,
    borderBottomColor:'#b0b0b0',
    alignItems: 'center',
    borderTopWidth:0

} ,textStyle : {
    paddingTop: 10,
    fontSize: 25,
    textShadowColor:'#757575',
    textShadowRadius:6,
    color: '#fff'
}
}) 
export default Header;
