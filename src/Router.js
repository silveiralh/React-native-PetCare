import * as React from 'react';
import { Image, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AgendamentosPage from './screens/AgendamentosPage.js'
import ServicosPage from './screens/ServicosPage.js'
import PetPage from './screens/PetPage.js'
import LoginPage from './screens/LoginPage'
import ButtonStyledGreen from './components/ButtonStyledGreen.js';

import AgendamentoDetail from './screens/AgendamentoDetail.js';
import CadastroAgendamento from './screens/CadastroAgendamento.js';

import ServicoDetail from './screens/ServicoDetail.js';
import CadastroServico from './screens/CadastroServico.js';

import PetDetail from './screens/PetDetail.js';
import CadastroPet from './screens/CadastroPet.js';

function HomeButtons({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ marginBottom: 20, marginTop: 10 }} source={require('./images/agenda.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Agendamentos')}>
        <ButtonStyledGreen
          label={"AGENDAMENTOS"} />
      </TouchableOpacity>
      <Image style={{ marginBottom: 20, marginTop: 10 }} source={require('./images/pata.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Pets')}>
        <ButtonStyledGreen
          label={"PETS"} />
      </TouchableOpacity>
      <Image style={{ marginBottom: 20, marginTop: 10 }} source={require('./images/servico.png')} />
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
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#000',
          
        },
        headerTintColor: '#b1b1b1',
        headerTitleStyle: {
          fontWeight:'normal',
          // fontSize: 25
        },
      }}> 
      
        <Stack.Screen name="Login" component={LoginPage} 
        options={{
          headerTitle:"",
           headerTransparent:true
        }}/>
        <Stack.Screen name="Home" component={HomeButtons} />

        <Stack.Screen name="Servico - Editar/Remover"  component={CadastroServico} />
        <Stack.Screen name="Pet - Editar/Remover"  component={CadastroPet} />
        <Stack.Screen name="Agendamento - Editar/Remover"  component={CadastroAgendamento} />
        
        <Stack.Screen name="Pet - Detalhes"  component={PetDetail} />
        <Stack.Screen name="Agendamento - Detalhes"  component={AgendamentoDetail} />
        <Stack.Screen name="Servico - Detalhes" component={ServicoDetail} />

        <Stack.Screen name="Serviços" component={ServicosPage} />
        <Stack.Screen name="Pets" component={PetPage} />
        <Stack.Screen name="Agendamentos" component={AgendamentosPage} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
