import OpcaoMenuHome from "@/components/OpcaoMenuHome";
import Tela from "@/components/Tela";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";

const Home = () => {

  return <Tela>
    <ScrollView>
      <Text style={ styles.titulo }>Seja bem vindo</Text>
      <View style={ styles.containerOpcao }>
        <OpcaoMenuHome icone="person-walking" titulo="Clientes" onRedirecionar={ () => {} } />
        <OpcaoMenuHome icone="person-walking" titulo="Produtos" onRedirecionar={ () => {} } />
      </View>
      <View style={ styles.containerOpcao }>
        <OpcaoMenuHome icone="person-walking" titulo="Categorias de produtos" onRedirecionar={ () => {} } />
        <OpcaoMenuHome icone="person-walking" titulo="Estoque" onRedirecionar={ () => {} } />
      </View>
      <View style={ styles.containerOpcao }>
        <OpcaoMenuHome icone="person-walking" titulo="Vendas" onRedirecionar={ () => {} } />
      </View>
    </ScrollView>
  </Tela>
}

export default Home;