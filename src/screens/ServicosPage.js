import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';
import servicos from '../servicos.json';
import {connect} from 'react-redux';
import {watchServicos} from '../actions';
import CardServicos from '../components/CardServicos';

class ServicosPage extends Component{
    componentDidMount(){
        this.props.watchServicos();
    }

    render(){
        return(
             <View >
                <TouchableOpacity style={styles.margem} onPress={() => this.props.navigation.navigate('Servico - Editar/Remover')}>
                    <ButtonStyledGreen
                        label={"ADICIONAR SERVIÇO"} />
                </TouchableOpacity>
                <FlatList 
                    data={[...this.props.servicos]}
                    renderItem={({item}) =>{
                        return (
                            <CardServicos item={item} 
                            onNavigate={ () => this.props.navigation.navigate('Servico - Detalhes', {item:item})}/>
                        )
                    }}
                    keyExtractor={item=> item.id.toString()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    margem: {
        flexGrow: 1,
        alignItems: "center",
        paddingTop: 20,
        marginBottom: -10
    }
})

const mapStateToProps =state=>{
    const{servicoList} = state;
    const keys = Object.keys(servicoList);
    const listaServicosID = keys.map(key=>{
        return {...servicoList[key], id:key}
    })
    return {servicos:listaServicosID};
}
//  export default ServicosPage
export default connect(mapStateToProps,{watchServicos})(ServicosPage)