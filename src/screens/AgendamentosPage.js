import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../components/Header.js'
import ListAgendamentos from '../components/ListAgendamentos.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';
 

type Props = {};
export default class AgendamentosPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.imgSource='./src/images/pata.png'
    this.state = {
      agendamentos: [],
      loading:false
    };
  }
  componentDidMount() {
    this.setState({loading:true})
    const { content } =
    {
      "content": [
        {
          "nomePet": "Hulk",
          "servico": "Limpar as penas",
          "data": "10/11/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Icarozinho",
          "servico": "Banho + Hidratação",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Adalberto",
          "servico": "Hidratação",
          "data": "10/10/2020",
          "hora": "16:00"
        },
        {
          "nomePet": "Zeca",
          "servico": "Banho",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Mabel",
          "servico": "Banho + Tosa",
          "data": "16/06/2020",
          "hora": "16:20"
        },
        {
          "nomePet": "Icarozinho",
          "servico": "Banho + Hidratação",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Adalberto",
          "servico": "Hidratação",
          "data": "10/10/2020",
          "hora": "16:00"
        },
        {
          "nomePet": "Zeca",
          "servico": "Banho",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Mabel",
          "servico": "Banho + Tosa",
          "data": "16/06/2020",
          "hora": "16:20"
        },
        {
          "nomePet": "Icarozinho",
          "servico": "Banho + Hidratação",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Adalberto",
          "servico": "Hidratação",
          "data": "10/10/2020",
          "hora": "16:00"
        },
        {
          "nomePet": "Zeca",
          "servico": "Banho",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Mabel",
          "servico": "Banho + Tosa",
          "data": "16/06/2020",
          "hora": "16:20"
        },
        {
          "nomePet": "Icarozinho",
          "servico": "Banho + Hidratação",
          "data": "10/10/2020",
          "hora": "13:00"
        },
        {
          "nomePet": "Adalberto",
          "servico": "Hidratação",
          "data": "10/10/2020",
          "hora": "16:00"
        }
      ]
    }
    this.setState({
      agendamentos: content,
      loading:false
    });
    // const agendamentos = content.map(agendamento => agendamento.nomePet)//PARA PEGAR OS NOMES

  }



  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ? <ActivityIndicator size="large" color="#E36363"/> : null
        }
                <TouchableOpacity style={styles.margem} onPress={() => this.props.navigation.navigate('Agendamento - Editar/Remover')}>
                    <ButtonStyledGreen 
                        label={"ADICIONAR AGENDAMENTO"} path={this.imgSource} />
                </TouchableOpacity>

        <ListAgendamentos 
        content={this.state.agendamentos}
        onPressItem={ () => this.props.navigation.navigate('Agendamento - Editar/Remover')}                
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#E36363'

  },
  margem:{
      flexGrow:1,
      alignItems:"center",
      paddingTop:20,
      marginBottom:-10
  }
})
