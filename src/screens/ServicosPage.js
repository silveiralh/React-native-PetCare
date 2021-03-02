import React, { Component } from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import ListServicos from '../components/ListServicos.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';


type Props = {};
export default class ServicotosPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            servicos: [],
            loading: false
        };
    }
    componentDidMount() {
        this.setState({loading:true})
        const { content } =
        {
            "content": [
                {
                    "nomeServico": "Banho - Porte Pequeno",
                    "valor": "0,00",
                    "tempoEstimado": "00h 40m"
                },
                {
                    "nomeServico": "Tosa - Porte Pequeno",
                    "valor": "15,00",
                    "tempoEstimado": "01h 00m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Banho - Porte Pequeno",
                    "valor": "0,00",
                    "tempoEstimado": "00h 40m"
                },
                {
                    "nomeServico": "Tosa - Porte Pequeno",
                    "valor": "15,00",
                    "tempoEstimado": "01h 00m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                },
                {
                    "nomeServico": "Hidratação",
                    "valor": "10,00",
                    "tempoEstimado": "00h 30m"
                }
            ]
        }

        this.setState({
            servicos: content,
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
                <TouchableOpacity style={styles.margem} onPress={() => this.props.navigation.navigate('Servico - Editar/Remover')}>
                    <ButtonStyledGreen
                        label={"ADICIONAR SERVIÇO"} />
                </TouchableOpacity>
                <ListServicos content={this.state.servicos} 
                onPressItem={ () => this.props.navigation.navigate('Servico - Editar/Remover')}
                returnPage={ () => this.props.navigation.navigate('Servicos')}/>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#E36363'

    },
    margem: {
        flexGrow: 1,
        alignItems: "center",
        paddingTop: 20,
        marginBottom: -10
    }
})
 