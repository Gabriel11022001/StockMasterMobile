import Cliente from "@/app/tipos/cliente";
import Botao from "@/components/Botao";
import Campo from "@/components/Campo";
import Loader from "@/components/Loader";
import Tela from "@/components/Tela";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useCadastroCliente } from "..";

const CadastroEnderecoCliente = ({ navigation }: any) => {

  const { clienteCadastro, setClienteCadastro } = useCadastroCliente();
  
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ cep, setCep ] = useState<string>("");
  const [ logradouro, setLogradouro ] = useState<string>("");
  const [ complemento, setComplemento ] = useState<string>("");
  const [ cidade, setCidade ] = useState<string>("");
  const [ bairro, setBairro ] = useState<string>("");
  const [ uf, setUf ] = useState<string>("");
  const [ numero, setNumero ] = useState<string>("");

  const [ erroCep, setErroCep ] = useState<string>("");
  const [ erroLogradouro, setErroLogradouro ] = useState<string>("");
  const [ erroCidade, setErroCidade ] = useState<string>("");
  const [ erroBairro, setErroBairro ] = useState<string>("");
  const [ erroNumero, setErroNumero ] = useState<string>("");

  const preencherCamposEndereco = (): void => {

    if (clienteCadastro?.endereco) {
      setCep(clienteCadastro.endereco.cep);
      setComplemento(clienteCadastro.endereco.complemento);
      setLogradouro(clienteCadastro.endereco.logradouro);
      setCidade(clienteCadastro.endereco.cidade);
      setBairro(clienteCadastro.endereco.bairro);
      setUf(clienteCadastro.endereco.uf);
      setNumero(clienteCadastro.endereco.numero);
    } else {
      setCep("");
      setComplemento("");
      setLogradouro("");
      setCidade("");
      setNumero("");
      setBairro("");
      setUf("SP");
    } 

  }

  const onDigitarCep = (cepDigitado: string): void => {
    setCep(cepDigitado);

    if (cepDigitado.trim() === "") {
      setErroCep("Digite o cep!");
    } else {
      setErroCep("");
    }

  }

  const onDigitarLogradouro = (logradouroDigitado: string): void => {
    setLogradouro(logradouroDigitado);

    if (logradouroDigitado.trim() === "") {
      setErroLogradouro("Informe o logradouro!");
    } else {
      setErroLogradouro("");
    }

  }

  // salvar o cliente no servidor
  const salvarCliente = async () => {
    setIsLoading(true);

    try {

    } catch (e) {
      console.error("Erro ao tentar-se salvar o cliente no servidor: " + e);
    } finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    preencherCamposEndereco();
  }, []);

  useEffect(() => {

    const onBeforeRemove = (e: any) => {
      e.preventDefault();

      if (erroCep == ""
        && erroLogradouro == ""
        && erroCidade == ""
        && erroNumero == ""
        && erroBairro == ""
      ) {
        const clienteEndereco: Cliente | undefined = {
          clienteId: clienteCadastro?.clienteId ?? 0,
          cpf: clienteCadastro?.cpf ?? "",
          nome: clienteCadastro?.nome ?? "",
          email: clienteCadastro?.email ?? "",
          telefone: clienteCadastro?.telefone ?? "",
          dataNascimento: clienteCadastro?.dataNascimento ?? "",
          genero: clienteCadastro?.genero ?? "",
          endereco: {
            cep: cep.trim(),
            logradouro: logradouro.trim(),
            complemento: complemento.trim(),
            cidade: cidade.trim(),
            bairro: bairro.trim(),
            numero: numero.trim(),
            uf: uf.trim()
          }
        }

        setClienteCadastro(clienteEndereco);

        navigation.dispatch(e.data.action);
      }

    };

    const unsubscribe = navigation.addListener("beforeRemove", onBeforeRemove);

    return unsubscribe;
  }, [
    navigation, 
    erroCep, 
    erroLogradouro, 
    erroCidade, 
    erroBairro, 
    erroNumero,
    cep,
    logradouro,
    complemento,
    cidade,
    bairro,
    numero,
    uf
  ]);

  return <Tela>
    <Loader carregando={ isLoading } mensagem="Enviando o cliente para o servidor, aguarde..." />
    <ScrollView>
      { /** campo para o usuário informar o cep */ }
      <Campo
        valor={ cep }
        erroCampo={ erroCep }
        habilitado={ true }
        label="CEP"
        obrigatorio={ true }
        placeholder="Digite o cep..."
        mask="99999-999"
        onAlterarValor={ (cepDigitado: string) => {
          onDigitarCep(cepDigitado);
        } } />
      { /** campo para o usuário informar o logradouro */ }
      <Campo
        valor={ logradouro }
        label="Logradouro"
        erroCampo={ erroLogradouro }
        habilitado={ true }
        obrigatorio={ true }
        placeholder="Digite o logradouro..."
        onAlterarValor={ (logradouroDigitado: string) => {
          onDigitarLogradouro(logradouroDigitado);
        } } />
      { /** campo para o usuário informar o complemento */ }
      <Campo
        valor={ complemento }
        label="Complemento"
        erroCampo={ "" }
        habilitado={ true }
        obrigatorio={ false }
        placeholder="Digite o complemento..."
        onAlterarValor={ (complementoDigitado: string) => setComplemento(complementoDigitado) } />
      { /** botão que ao ser pressionado, invoca a função reponsável para salvar o cliente no servidor */ }
      <Botao
        texto="Finalizar"
        habilitado={ true }
        onPress={ salvarCliente } />
    </ScrollView>
  </Tela>
}

export default CadastroEnderecoCliente;