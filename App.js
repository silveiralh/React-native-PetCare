import * as React from 'react';
import { Image, Button, View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AgendamentosPage from './src/screens/AgendamentosPage.js'
import ServicosPage from './src/screens/ServicosPage.js'
import PetPage from './src/screens/PetPage.js'
import LoginPage from './src/screens/LoginPage'
import ButtonStyledGreen from './src/components/ButtonStyledGreen.js';
import AgendamentoDetail from './src/screens/AgendamentoDetail.js';
import ServicoDetail from './src/screens/ServicoDetail.js';
import PetDetail from './src/screens/PetDetail.js';

function HomeButtons({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ marginBottom: 20, marginTop: 10 }} source={require('./src/images/agenda.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Agendamentos')}>
        <ButtonStyledGreen
          label={"AGENDAMENTOS"} />
      </TouchableOpacity>
      <Image style={{ marginBottom: 20, marginTop: 10 }} source={require('./src/images/pata.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Pets')}>
        <ButtonStyledGreen
          label={"PETS"} />
      </TouchableOpacity>
      <Image style={{ marginBottom: 20, marginTop: 10 }} source={require('./src/images/servico.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Serviços')}>
        <ButtonStyledGreen
          label={"SERVIÇOS"} />
      </TouchableOpacity>
    </View>
  );

}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeButtons} />

        <Stack.Screen name="Agendamento - Editar/Remover" component={AgendamentoDetail} />
        <Stack.Screen name="Pet - Editar/Remover" component={PetDetail} />
        <Stack.Screen name="Servico - Editar/Remover" component={ServicoDetail} />

        <Stack.Screen name="Serviços" component={ServicosPage} />
        <Stack.Screen name="Pets" component={PetPage} />
        <Stack.Screen name="Agendamentos" component={AgendamentosPage} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
