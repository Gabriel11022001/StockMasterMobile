type Cliente = {

  clienteId: number;
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  genero: string;
  telefone: string;
  endereco?: {
    cep: string;
    complemento: string;
    logradouro: string;
    cidade: string;
    bairro: string;
    numero: string;
    uf: string;
  }

}

export default Cliente;