import DadosBasicos from '@/app/view/CadastroCliente/DadosBasicos';
import CadastroEnderecoCliente from '@/app/view/CadastroCliente/Endereco';
import CadastroProduto from '@/app/view/CadastroProduto';
import Clientes from '@/app/view/Clientes';
import Home from '@/app/view/Home';
import Login from '@/app/view/Login';
import Perfil from '@/app/view/Perfil';
import Produtos from '@/app/view/Produtos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

interface Tela {

  titulo: string;
  rota: string;
  inicial: boolean;
  componente: React.FC;
  add: boolean;
  addRedirecionar?: string;

}

const telas: Tela[] = [
  {
    titulo: "Login",
    inicial: true,
    rota: "login",
    componente: Login,
    add: false
  },
  {
    titulo: "Home",
    inicial: false,
    rota: "home",
    componente: Home,
    add: false
  },
  {
    titulo: "Clientes",
    inicial: false,
    rota: "clientes",
    componente: Clientes,
    add: true,
    addRedirecionar: "cadastroClientesDadosBasicos"
  },
  {
    titulo: "Cadastro de Cliente",
    inicial: false,
    rota: "cadastroClientesDadosBasicos",
    componente: DadosBasicos,
    add: false
  },
  {
    titulo: "Endereço",
    inicial: false,
    rota: "cadastroEnderecoCliente",
    componente: CadastroEnderecoCliente,
    add: false
  },
  {
    titulo: "Produtos",
    inicial: false,
    rota: "produtos",
    componente: Produtos,
    add: true,
    addRedirecionar: "cadastroProdutos"
  },
  {
    titulo: "Cadastro de produto",
    inicial: false,
    rota: "cadastroProdutos",
    componente: CadastroProduto,
    add: false
  },
  {
    titulo: "Perfil",
    componente: Perfil,
    inicial: false,
    add: false,
    rota: "perfil"
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
          <Stack.Screen name={ tela.rota } component={ tela.componente } options={ ({ navigation }) => {

            return {
              title: tela.titulo,
              headerRight: () => {

                if (!tela.add) {

                  return false;
                }
                
                return <TouchableOpacity
                  onPress={ () => {

                    if (tela.addRedirecionar != undefined && tela.addRedirecionar != null) {
                      navigation.navigate(tela.addRedirecionar);
                    }

                  } }>
                    <FontAwesome name="plus" color="#000" size={ 30 } />
                </TouchableOpacity>
              }
            }
          } } />
        )
      }) }
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;