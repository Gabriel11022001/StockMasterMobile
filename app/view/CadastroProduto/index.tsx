import CategoriaProduto from "@/app/tipos/categoriaProduto";
import FotoProduto from "@/app/tipos/fotoProduto";
import Botao from "@/components/Botao";
import Campo from "@/components/Campo";
import Tela from "@/components/Tela";
import { useState } from "react";
import { ScrollView } from "react-native";

const CadastroProduto = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ produtoId, setProdutoId ] = useState<number>(0);
  const [ nomeProduto, setNomeProduto ] = useState<string>("");
  const [ precoVenda, setPrecoVenda ] = useState<string>("");
  const [ estoque, setEstoque ] = useState<string>("");
  const [ ativo, setAtivo ] = useState<boolean>(true);
  const [ categoria, setCategoria ] = useState<CategoriaProduto | null>(null);
  const [ foto, setFoto ] = useState<FotoProduto | null>(null);
  const [ erroNomeProduto, setErroNomeProduto ] = useState<string>("");
  const [ erroPrecoVendaProduto, setErroPrecoVendaProduto ] = useState<string>("");
  const [ erroEstoque, setErroEstoque ] = useState<string>("");

  // salvar produto
  const salvarProduto = async () => {
    setIsLoading(true);

    try {

    } catch (e) {
      // apresentar um alerta de erro para o usuário
    } finally {
      setIsLoading(false);
    }

  }

  const onDigitarPrecoVendaProduto = (precoVendaDigitado: string): void => {

    try {
      setPrecoVenda(precoVendaDigitado.trim());
      const precoVenda: number = parseFloat(precoVendaDigitado.trim());

      if (precoVendaDigitado.trim() === "") {
        setErroPrecoVendaProduto("Informe o preço de venda!");
      } else if (precoVenda < 0) {
        setErroPrecoVendaProduto("Preço de venda inválido!");
      } else {
        setErroPrecoVendaProduto("");
      }

    } catch (e) {
      setPrecoVenda("0.00");
      setErroPrecoVendaProduto("Preço de venda inválido!");
    }

  }

  const onDigitarNomeProduto = (nomeProdutoDigitado: string): void => {

    try {
      setNomeProduto(nomeProdutoDigitado);

      if (nomeProdutoDigitado.trim() === "") {
        setErroNomeProduto("Informe o nome do produto!");
      } else if (nomeProdutoDigitado.trim().length < 3) {
        setErroNomeProduto("O nome do produto deve possuir no mínimo 3 caracteres!");
      } else {
        setErroNomeProduto("");
      }

    } catch (e) {
      setErroNomeProduto("Erro ao tentar-se validar o nome do produto!");
    }

  }

  const onDigitarEstoque = (estoqueDigitado: string): void => {

    try {
      setEstoque(estoqueDigitado.trim());

      if (estoqueDigitado.trim() == "") {
        setErroEstoque("Informe as unidades em estoque do produto!");
      } else if (parseInt(estoqueDigitado.trim()) < 0) {
        setErroEstoque("Unidades em estoque inválida!");
      } else {
        setErroEstoque("");
      }

    } catch (e) {
      setErroEstoque("Unidades em estoque inválida!");
    }

  }

  const getBotaoSalvarHabilitado = (): boolean => {

    return erroNomeProduto == ""
    && erroPrecoVendaProduto == ""
    && erroEstoque == ""
    && nomeProduto != ""
    && precoVenda != ""
    && estoque != ""
    && categoria != null;
  }

  return <Tela>
    <ScrollView>
      { /** campo para o usuário informar o nome do produto */ }
      <Campo
        valor={ nomeProduto }
        placeholder="Digite o nome do produto..."
        label="Nome do produto"
        obrigatorio={ true }
        habilitado={ true }
        onAlterarValor={ (nomeProdutoDigitado) => onDigitarNomeProduto(nomeProdutoDigitado)  }
        erroCampo={ erroNomeProduto } />
      { /** campo para o usuário informar o preço de venda do produto */ }
      <Campo
        valor={ precoVenda }
        placeholder="Ex: 0.00"
        label="Preço"
        obrigatorio={ true }
        habilitado={ true }
        onAlterarValor={ (precoVendaDigitado) => onDigitarPrecoVendaProduto(precoVendaDigitado.trim())  }
        erroCampo={ erroPrecoVendaProduto } />
      { /** campo para o usuário informar a quantidade em estoque do produto */ }
      <Campo
        valor={ estoque }
        placeholder="Ex: 0"
        label="Estoque"
        obrigatorio={ true }
        habilitado={ true }
        onAlterarValor={ (estoqueDigitado) => onDigitarEstoque(estoqueDigitado.trim())  }
        erroCampo={ erroEstoque } />
      <Botao
        texto="Salvar"
        onPress={ salvarProduto }
        habilitado={ getBotaoSalvarHabilitado() } />
    </ScrollView>
  </Tela>
}

export default CadastroProduto;