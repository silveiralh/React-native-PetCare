import React, { Component } from 'react';
import { Text,TextInput,Alert,TouchableOpacity, View, StyleSheet } from 'react-native';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import ButtonStyledRed from '../components/ButtonStyledRed';

type Props = {};
export default class AgendamentoDetail extends Component<Props> {
  onClickListener = (msg) => {
    Alert.alert("Ação",msg);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Nome do Pet"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(nomePet) => this.setState({ nomePet })} 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Serviço"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(servico) => this.setState({ servico })} 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Data"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(data) => this.setState({ data })} 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Hora"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(hora) => this.setState({ hora })} 
          />
        </View>
        <TouchableOpacity onPress={() => this.onClickListener('Agendamento Salvo') } >
          <ButtonStyledGreen label={'SALVAR EDIÇÕES'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onClickListener('Agendamento Removido') }  >
          <ButtonStyledRed style={{ backgroundColor: "#E36363" }} label={'REMOVER'} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    flexGrow:1,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    
    height: 45,
    paddingLeft: 10,
    borderBottomColor: '#FFFFFF',
    flexGrow: 1,
    textAlign: "center"
  },
  container:{
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems:"center"
  }
})