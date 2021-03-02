import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../components/Header.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';
import agendamentos from '../agendamentos.json'; 
import CardAgendamento from '../components/CardAgendamento';
import {connect} from 'react-redux';

import {watchAgendamentos} from '../actions';

class AgendamentosPage extends Component{
    componentDidMount(){
        this.props.watchAgendamentos();
    }

    render(){
        return(
            <View >
              <TouchableOpacity style={styles.margem} onPress={() => this.props.navigation.navigate('Agendamento - Editar/Remover')}>
                  <ButtonStyledGreen
                      label={"ADICIONAR AGENDAMENTO"} />
              </TouchableOpacity>
              <FlatList 
                  data={[...this.props.agendamentos]}
                  renderItem={({item}) =>{
                      return (
                          <CardAgendamento item={item} 
                          onNavigate={ () => this.props.navigation.navigate('Agendamento - Detalhes', {item:item})}/>
                      )
                  }}
                  keyExtractor={item=> item.id.toString()}
              />
          </View>
          )
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
const mapStateToProps =state=>{
    const{agendamentoList} = state;
    const keys = Object.keys(agendamentoList);
    const listaAgendamentosID = keys.map(key=>{
        return {...agendamentoList[key], id:key}
    })
    return {agendamentos:listaAgendamentosID};
}
// export default AgendamentosPage
export default connect(mapStateToProps, {watchAgendamentos})(AgendamentosPage)