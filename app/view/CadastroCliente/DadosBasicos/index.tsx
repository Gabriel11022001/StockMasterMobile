import Cliente from "@/app/tipos/cliente";
import validarCpf from "@/app/utils/validarCpf";
import validarDataNascimento from "@/app/utils/validarDataNascimento";
import validarEmail from "@/app/utils/validarEmail";
import validarTelefone from "@/app/utils/validarTelefone";
import Botao from "@/components/Botao";
import Campo from "@/components/Campo";
import Tela from "@/components/Tela";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useCadastroCliente } from "..";

type ErrosCamposCadastroCliente = {

  erroNomeCompleto: string;
  erroCpf: string;
  erroEmail: string;
  erroDataNascimento: string;
  erroTelefone: string;

}

export default function DadosBasicos({ navigation }: any) {

  const { clienteCadastro, setClienteCadastro } = useCadastroCliente();

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ idCliente, setIdCliente ] = useState<number>(0);
  const [ nomeCompleto, setNomeCompleto ] = useState<string>("");
  const [ cpf, setCpf ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ telefone, setTelefone ] = useState<string>("");
  const [ dataNascimento, setDataNascimento ] = useState<string>("");
  const [ genero, setGenero ] = useState<string>("");

  const [ errosCamposCadastroCliente, setErrosCamposCadastroCliente ] = useState<ErrosCamposCadastroCliente>({
    erroNomeCompleto: "",
    erroCpf: "",
    erroDataNascimento: "",
    erroEmail: "",
    erroTelefone: ""
  });

  // validar campo no cadastro de cliente
  const validarCampo = (tipoCampo: string, valor: string): void => {
    const errosCampos: ErrosCamposCadastroCliente = { ...errosCamposCadastroCliente };

    // validar nome completo
    if (tipoCampo === "nomeCompleto") {
      setNomeCompleto(valor);

      if (valor.trim() === "") {
        errosCampos.erroNomeCompleto = "Informe o nome completo!";
      } else if (valor.length < 3) {
        errosCampos.erroNomeCompleto = "O nome deve possuir no mínimo 3 caracteres!";
      } else {
        errosCampos.erroNomeCompleto = "";
      }

    } else if (tipoCampo === "cpf") {
      // validar o cpf digitado
      setCpf(valor.trim());

      if (valor.trim() === "") {
        errosCampos.erroCpf = "Informe o cpf!";
      } else if (!validarCpf(valor.trim())) {
        errosCampos.erroCpf = "Cpf inválido!";
      } else {
        errosCampos.erroCpf = "";
      }

    } else if (tipoCampo === "telefone") {
      // validar o telefone digitado
      setTelefone(valor);

      if (valor.trim() === "") {
        errosCampos.erroTelefone = "Informe o telefone!";
      } else if (!validarTelefone(valor.trim())) {
        errosCampos.erroTelefone = "Telefone inválido!";
      } else {
        errosCampos.erroTelefone = "";
      }

    } else if (tipoCampo === "email") {
      // validar o e-mail digitado
      setEmail(valor.trim());

      if (valor.trim() === "") {
        errosCampos.erroEmail = "Informe o e-mail!";
      } else if (!validarEmail(valor.trim())) {
        errosCampos.erroEmail = "E-mail inválido!";
      } else {
        errosCampos.erroEmail = "";
      }

    } else if (tipoCampo === "dataNascimento") {
      // validar a data de nascimento
      setDataNascimento(valor.trim());

      if (valor.trim() === "") {
        errosCampos.erroDataNascimento = "Informe a data de nascimento!";
      } else if (!validarDataNascimento(valor.trim())) {
        errosCampos.erroDataNascimento = "Data de nascimento inválida!";
      } else {
        errosCampos.erroDataNascimento = "";
      }

    }

    setErrosCamposCadastroCliente(errosCampos);
  }

  // salvar o cliente
  const salvarCliente = async () => {

    try {
      const cliente: Cliente = {
        clienteId: idCliente,
        nome: nomeCompleto.trim(),
        email: email.trim(),
        cpf: cpf.trim(),
        telefone: telefone.trim(),
        dataNascimento: dataNascimento.trim(),
        genero: genero.trim(),
        endereco: clienteCadastro?.endereco
      }

      setClienteCadastro(cliente);

      // redirecionar o usuário para a tela de endereço
      navigation.navigate("cadastroEnderecoCliente");
    } catch (e) {
      console.error(e);
    }

  }

  const preencherCamposDadosCliente = (): void => {

    if (clienteCadastro) {
      setIdCliente(clienteCadastro.clienteId);
      setNomeCompleto(clienteCadastro.nome.trim());
      setCpf(clienteCadastro.cpf.trim());
      setDataNascimento(clienteCadastro.dataNascimento.trim());
      setEmail(clienteCadastro.email.trim());
      setTelefone(clienteCadastro.telefone.trim());
      setGenero(clienteCadastro.genero.trim());
    }

  }

  useFocusEffect(useCallback(() => {
    preencherCamposDadosCliente();
  }, []));

  const retornar = (e: any): void => {
    // limpar o context
    setClienteCadastro(null);

    navigation.dispatch(e.data.action);
  }

  useEffect(() => {

    const onBeforeRemove = (e: any) => {
      e.preventDefault();

      Alert.alert(
        "Atenção!",
        "Deseja mesmo sair do cadastro de cliente? Os dados preenchidos até o momento serão perdidos.",
        [
          {
            style: "destructive",
            text: "Sim",
            onPress: () => {
              retornar(e);
            }
          },
          {
            style: "cancel",
            text: "Não",
            onPress: () => null
          }
        ]
      );

    };

    const unsubscribe = navigation.addListener("beforeRemove", onBeforeRemove);

    return unsubscribe;

  }, [ navigation ]);

  return <Tela>
    <ScrollView>
      { /** campo para o usuário informar o nome completo */ }
      <Campo
        valor={ nomeCompleto }
        onAlterarValor={ (nomeCompletoDigitado) => validarCampo("nomeCompleto", nomeCompletoDigitado) }
        label="Nome Completo"
        obrigatorio={ true }
        habilitado={ true }
        placeholder="Digite o nome completo..."
        erroCampo={ errosCamposCadastroCliente.erroNomeCompleto } />
      { /** campo para o usuário informar o cpf */ }
      <Campo
        valor={ cpf }
        onAlterarValor={ (cpfDigitado) => validarCampo("cpf", cpfDigitado) }
        label="CPF"
        obrigatorio={ true }
        habilitado={ true }
        placeholder="Digite o cpf..."
        mask="999.999.999-99"
        erroCampo={ errosCamposCadastroCliente.erroCpf } />
      { /** campo para o usuário informar o telefone */ }
      <Campo
        valor={ telefone }
        onAlterarValor={ (telefoneDigitado) => validarCampo("telefone", telefoneDigitado) }
        label="Telefone"
        obrigatorio={ true }
        habilitado={ true }
        placeholder="(00) 00000-0000"
        mask="(99) 99999-9999"
        erroCampo={ errosCamposCadastroCliente.erroTelefone } />
      { /** campo para o usuário informar o e-mail */ }
      <Campo
        valor={ email }
        onAlterarValor={ (emailDigitado) => validarCampo("email", emailDigitado) }
        label="E-mail"
        obrigatorio={ true }
        habilitado={ true }
        placeholder="Digite o e-mail..."
        erroCampo={ errosCamposCadastroCliente.erroEmail } />
      { /** campo para o usuário informar a data de nascimento */ }
      <Campo
        valor={ dataNascimento }
        onAlterarValor={ (dataNascimentoDigitada) => validarCampo("dataNascimento", dataNascimentoDigitada) }
        label="Data de nascimento"
        obrigatorio={ true }
        habilitado={ true }
        placeholder="Digite a data de nascimento..."
        mask="99/99/9999"
        erroCampo={ errosCamposCadastroCliente.erroDataNascimento } />
      <Botao texto="Salvar" habilitado={ errosCamposCadastroCliente.erroCpf == "" 
        && errosCamposCadastroCliente.erroNomeCompleto == ""
        && errosCamposCadastroCliente.erroDataNascimento == ""
        && errosCamposCadastroCliente.erroEmail == ""
        && errosCamposCadastroCliente.erroTelefone == ""
        && nomeCompleto != ""
        && cpf != ""
        && email != ""
        && telefone != ""
        && dataNascimento != ""
       } onPress={ () => {
        salvarCliente();
      } } />
    </ScrollView>
  </Tela>
}