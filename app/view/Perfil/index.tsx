import Usuario from "@/app/tipos/usuario";
import BotaoSair from "@/components/BotaoSair";
import DadoUsuarioLogado from "@/components/DadoUsuarioLogado";
import Tela from "@/components/Tela";
import { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

const Perfil = () => {

  const [ usuarioLogado, setUsuarioLogado ] = useState<Usuario | null>(null);

  // obter o usuário logado
  const getUsuarioLogado = async () => {

  }

  // realizar logout
  const logout = async () => {

    try {

      Alert.alert("Atenção!", "Deseja sair do aplicativo?", [
        {
          style: "destructive",
          text: "Sim",
          onPress: () => {
            confirmarSair();
          }
        },
        {
          style: "cancel",
          text: "Não",
          onPress: () => {

            return null;
          }
        }
      ]);

    } catch (e) {
      console.error("Erro ao tentar-se relizar logout: " + e);
    }

  }

  async function confirmarSair() {

  }

  useEffect(() => {
    getUsuarioLogado();
  }, []);

  return (
    <Tela>
      <ScrollView>
        <DadoUsuarioLogado dado="Nome" valor={ usuarioLogado?.nomeCompleto ?? "-----------" } />
        <DadoUsuarioLogado dado="E-mail" valor={ usuarioLogado?.email ?? "-----------" } />
        <BotaoSair onClickSair={ () => logout() } />
      </ScrollView>
    </Tela>
  );
}

export default Perfil;