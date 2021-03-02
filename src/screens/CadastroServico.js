import React, { Component } from 'react';
import { Text, Alert,ScrollView,  TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import ButtonStyledRed from '../components/ButtonStyledRed';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import FormRow from '../components/FormRow';
import {setFieldServico, saveServico} from '../actions';
import {connect} from 'react-redux';

type Props = {};
const CadastroServico = ({servicoForm, setFieldServico, saveServico, navigation}) =>  (

  <ScrollView>
      <View style={styles.container}>
        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Nome do Serviço"
            underlineColorAndroid='transparent'
            onChangeText={valor => setFieldServico('nomeServico', valor)
            }
          />
        </FormRow>
        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Valor"
            underlineColorAndroid='transparent'
            onChangeText={valor => setFieldServico('valor', valor)
            }
          />
        </FormRow>
        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Tempo Estimado"
            underlineColorAndroid='transparent'
            onChangeText={valor => setFieldServico('tempoEstimado', valor)
            }
          />
        </FormRow>
        <TouchableOpacity onPress={async () => {
            await saveServico(servicoForm)
            navigation.goBack();
            }} >
          <ButtonStyledGreen label={'SALVAR'} />
        </TouchableOpacity>
        
      </View>
    </ScrollView>  
  );
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
    marginTop: 20,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center"
  }
})
const mapStateToProps =(state) =>{
  return ({
    servicoForm: state.servicoForm
  })
}
const mapDispatchToProps ={
    setFieldServico, 
    saveServico
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastroServico);
