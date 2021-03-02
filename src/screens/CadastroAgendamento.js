import React, { Component } from 'react';
import { Text, TextInput,ScrollView, Alert, TouchableOpacity, View, StyleSheet } from 'react-native';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import ButtonStyledRed from '../components/ButtonStyledRed';
import FormRow from '../components/FormRow';
import {connect} from 'react-redux';

import {setFieldAgendamento, saveAgendamento} from '../actions';
import DatePicker from 'react-native-datepicker';

type Props = {};
const CadastroAgendamento = ({agendamentoForm, setFieldAgendamento, saveAgendamento, navigation}) =>  (
  <ScrollView>
      <View style={styles.container}>

        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Nome do Pet"
            underlineColorAndroid='transparent' 
            value={agendamentoForm.nomePet }
            onChangeText={valor => setFieldAgendamento('nomePet', valor)}
          />
        </FormRow>

        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Serviço"
            underlineColorAndroid='transparent'
            value={agendamentoForm.servico }
            onChangeText={valor => setFieldAgendamento('servico', valor)}
          />
        </FormRow>
        <FormRow style={styles.inputContainer}>
        <DatePicker
          style={styles.datePickerStyle}
          // date={date} // Initial date from state
          // mode="date" // The enum of date, datetime and time
          placeholder="Selecione a data"
          format="DD-MM-YYYY"
          minDate="01-10-2020"
          maxDate="01-01-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={valor => setFieldAgendamento('data', valor)}
        />
        </FormRow>
        <FormRow style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Hora"
            underlineColorAndroid='transparent'
            value={agendamentoForm.hora }
            onChangeText={valor => setFieldAgendamento('hora', valor)}
          />
        </FormRow>
        <TouchableOpacity onPress={async () => {
            await saveAgendamento(agendamentoForm)
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
  datePickerStyle: {
    width: 380,
    borderColor: "white",
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
const mapStateToProps =(state) =>{
  return ({
    agendamentoForm: state.agendamentoForm
  })
}
const mapDispatchToProps ={
    setFieldAgendamento, 
    saveAgendamento
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastroAgendamento);
