import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ListPets from '../components/ListPets.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonStyledGreen from '../components/ButtonStyledGreen.js';


type Props = {};
export default class ServicotosPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            loading: false
        };
    }
    componentDidMount() {
        this.setState({loading:true})
        const { content } =
        {
            "content": [
                {
                    "nomePet": "Mabel",
                    "porte": "Pequeno",
                    "tutor": "Giovana",
                    "especie": "Gato"
                },
                {
                    "nomePet": "Zeca",
                    "porte": "Gigante",
                    "tutor": "Giovana tbm",
                    "especie": "Gato"
                },
                {
                    "nomePet": "Icarozinho",
                    "porte": "Medio",
                    "tutor": "Luiz Henrique",
                    "especie": "Cachorro"
                },
                {
                    "nomePet": "Hulk",
                    "porte": "Pequeno",
                    "tutor": "Luiz Henrique",
                    "especie": "Papagaio"
                },
                {
                    "nomePet": "Ticotico",
                    "porte": "Medio",
                    "tutor": "Maria Antonieta",
                    "especie": "Galinha"
                },{
                    "nomePet": "Mabel",
                    "porte": "Pequeno",
                    "tutor": "Giovana",
                    "especie": "Gato"
                },
                {
                    "nomePet": "Zeca",
                    "porte": "Gigante",
                    "tutor": "Giovana tbm",
                    "especie": "Gato"
                },
                {
                    "nomePet": "Icarozinho",
                    "porte": "Medio",
                    "tutor": "Luiz Henrique",
                    "especie": "Cachorro"
                },
                {
                    "nomePet": "Hulk",
                    "porte": "Pequeno",
                    "tutor": "Luiz Henrique",
                    "especie": "Papagaio"
                },
                {
                    "nomePet": "Ticotico",
                    "porte": "Medio",
                    "tutor": "Maria Antonieta",
                    "especie": "Galinha"
                }
            ]
        }

        this.setState({
            pets: content,
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
                <TouchableOpacity style={styles.margem} onPress={() => this.props.navigation.navigate('Pet - Editar/Remover')}>
                    <ButtonStyledGreen
                        label={"ADICIONAR PET"} />
                </TouchableOpacity>

                <ListPets content={this.state.pets}
                 onPressItem={ () => this.props.navigation.navigate('Pet - Editar/Remover')}
                 />

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
