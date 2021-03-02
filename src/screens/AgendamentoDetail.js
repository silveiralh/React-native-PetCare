import React, { Component } from 'react';
import { Text, TextInput, Alert, TouchableOpacity, View, StyleSheet } from 'react-native';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import ButtonStyledRed from '../components/ButtonStyledRed';
import FormRow from '../components/FormRow';

type Props = {};
export default class AgendamentoDetail extends Component<Props> {
  onClickListener = (msg) => {
    Alert.alert("Ação", msg);
  }
  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Nome do Pet"
            underlineColorAndroid='transparent'
            onChangeText={valor => {
              this.onChangeHandler('nomePet', valor)
            }}
          />
        </FormRow>

        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Serviço"
            underlineColorAndroid='transparent'
            onChangeText={valor => {
              this.onChangeHandler('servico', valor)
            }}
          />
        </FormRow>
        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Data"
            underlineColorAndroid='transparent'
            onChangeText={valor => {
              this.onChangeHandler('data', valor)
            }}
          />
        </FormRow>
        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Hora"
            underlineColorAndroid='transparent'
            onChangeText={valor => {
              this.onChangeHandler('hora', valor)
            }}
          />
        </FormRow>
        <TouchableOpacity onPress={() => this.onClickListener('Agendamento Salvo')} >
          <ButtonStyledGreen label={'SALVAR EDIÇÕES'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onClickListener('Agendamento Removido')}  >
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
    flexGrow: 1,
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
  container: {
    marginTop:20,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center"
  }
})