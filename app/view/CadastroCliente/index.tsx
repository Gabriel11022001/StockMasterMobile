import validarCpf from "@/app/utils/validarCpf";
import Botao from "@/components/Botao";
import Campo from "@/components/Campo";
import Tela from "@/components/Tela";
import { useState } from "react";
import { ScrollView } from "react-native";

type ErrosCamposCadastroCliente = {

  erroNomeCompleto: string;
  erroCpf: string;
  erroEmail: string;
  erroDataNascimento: string;
  erroTelefone: string;

}

export default function CadastroCliente() {

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

    }

    setErrosCamposCadastroCliente(errosCampos);
  }

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
        mask="000.000.000-00"
        erroCampo={ errosCamposCadastroCliente.erroCpf } />
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

      } } />
    </ScrollView>
  </Tela>
}