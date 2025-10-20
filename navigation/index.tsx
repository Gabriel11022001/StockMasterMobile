import Login from '@/app/view/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

interface Tela {

  titulo: string;
  rota: string;
  inicial: boolean;
  componente: React.FC;

}

const telas: Tela[] = [
  {
    titulo: "Login",
    inicial: true,
    rota: "login",
    componente: Login
  }
];

// obter a tela principal
const telaPrincipal: Tela | undefined = telas.find((tela: Tela) => tela.inicial);

const Stack = createNativeStackNavigator();

const Navigation = () => {
  
  return <NavigationContainer>
    <Stack.Navigator initialRouteName={ telaPrincipal != null && telaPrincipal != undefined ? telaPrincipal.rota : "login" }>
      { telas.map((tela: Tela) => {
        
        return (
          <Stack.Screen name={ tela.rota } component={ tela.componente } options={ {
            title: tela.titulo
          } } />
        )
      }) }
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;