import Usuario from "@/app/tipos/usuario";
import Botao from "@/components/Botao";
import CampoLogin from "@/components/CampoLogin";
import Tela from "@/components/Tela";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const Login = ({ navigation }: any) => {

  const [ email, setEmail ] = useState<string>("");
  const [ senha, setSenha ] = useState<string>("");
  const [ senhaVisivel, setSenhaVisivel ] = useState<boolean>(false);
  const [ erroEmail, setErroEmail ] = useState<string>("");
  const [ erroSenha, setErroSenha ] = useState<string>("");
  const [ realizandoRequisicao, setRealizandoRequisicao ] = useState<boolean>(false);

  const onDigitandoEmail = () => {
    setErroEmail("");

    try {

      if (email.trim() === "") {
        setErroEmail("Informe o e-mail");
      }

    } catch (e) {
      setErroEmail("Erro ao tentar-se validar o e-mail!");
    }

  }

  const onDigitandoSenha = () => {
    setErroSenha("");

    try {

      if (senha.trim() === "") {
        setErroSenha("Informe a senha!");
      } else if (senha.length < 6) {
        setErroSenha("Senha inválida!");
      }

    } catch (e) {
      setErroSenha("Erro ao tentar-se validar a senha!");
    }

  }

  useEffect(() => {
    onDigitandoEmail();
  }, [ email ]);

  useEffect(() => {
    onDigitandoSenha();
  }, [ senha ]);

  useEffect(() => {
    setErroEmail("");
    setErroSenha("");
  }, []);

  // apresentar um alerta de erro para o usuário
  const apresentarAlertaErro = (mensagemErro: string): void => {

  }

  // validar campos do usuário no login
  const validarCamposLogin = (): boolean => {

    return true
  }

  // realizar login no app
  const realizarLogin = async () => {
    setRealizandoRequisicao(true);

    try {

      if (validarCamposLogin()) {
        const usuarioLogin: Usuario = {
          email: email.trim(),
          senha: senha.trim(),
          onApresentarDadosUsuario: function (): void {
            console.log(`E-mail: ${ this.email }`);
            console.log(`Senha: ${ this.senha }`);
          }
        };   
        
        usuarioLogin.onApresentarDadosUsuario();

        // salvar os dados do usuário em memória

        // redirecionar o usuário para a tela home do app
        navigation.navigate("home");
      }

    } catch (e) {
      console.log(`Erro ao tentar-se efetuar o login: ${ e }`);

      apresentarAlertaErro("Erro ao tentar-se realizar login, tente novamente!");
    } finally {
      setRealizandoRequisicao(false);
    }

  }

  return (
    <Tela>
      <View style={ styles.container }>
        <View style={ styles.containerPossuiLogo }>
          <Image style={ styles.logo } source={ require("../../../assets/images/carrinho-de-compras.png") } />
        </View>
        <Text style={ styles.titulo }>Estoque & Vendas</Text>
        <Text style={ styles.txtFacaLogin }>Faça login para continuar</Text>
        <CampoLogin
          valor={ email }
          onChangeText={ (emailDigitado) => {
            setEmail(emailDigitado);
          } }
          placeholder="E-mail"
          senha={ false }
          margemTopo={ 40 } />
        { erroEmail && <Text style={ styles.erroCamposLogin }>{ erroEmail }</Text> } 
        <CampoLogin
          valor={ senha }
          onChangeText={ (senhaDigitada) => {
            setSenha(senhaDigitada);
          } }
          placeholder="Senha"
          senha={ true }
          margemTopo={ 10 }
          senhaVisivel={ senhaVisivel }
          onVisualizarSenha={ () => {

            if (senhaVisivel) {
              setSenhaVisivel(false);
            } else {
              setSenhaVisivel(true);
            }

          } } />
        { erroSenha && <Text style={ styles.erroCamposLogin }>{ erroSenha }</Text> } 
        <Botao texto="Entrar" onPress={ realizarLogin } habilitado={ 
          erroEmail == "" 
          && erroSenha == ""
          && email != ""
          && senha != "" } />
      </View>
    </Tela>
  );
}

export default Login;