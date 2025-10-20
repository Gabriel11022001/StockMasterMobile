export default interface Usuario {

  usuarioId?: number;
  email: string;
  senha: string;
  nomeCompleto?: string;

  onApresentarDadosUsuario: () => void;

};