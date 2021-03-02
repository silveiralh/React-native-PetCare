import React, { Component } from 'react';
import { Text, Alert, TextInput,TouchableOpacity, View, StyleSheet } from 'react-native';
import ButtonStyledRed from '../components/ButtonStyledRed';
import ButtonStyledGreen from '../components/ButtonStyledGreen';

type Props = {};
export default class ServicoDetail extends Component<Props> {
  
  onClickListener = (msg) => {
    Alert.alert("Ação",msg);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Nome do Serviço"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(nomeservico) => this.setState({ nomeServico })} 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Valor"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(valor) => this.setState({ valor })} 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Tempo estimado"
            keyboardType="text"
            underlineColorAndroid='transparent'
          // onChangeText={(tesmpoEstimado) => this.setState({ tesmpoEstimado })} 
          />
        </View>
        <TouchableOpacity  onPress={() => this.onClickListener('Serviço Salvo') }>
          <ButtonStyledGreen label={'SALVAR EDIÇÕES'} />
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => this.onClickListener('Serviço Removido') } >
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