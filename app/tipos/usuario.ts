export default interface Usuario {

  usuarioId?: number;
  email: string;
  senha: string;
  nomeCompleto?: string;
  fotoPerfil?: { base64Foto: string, extensao: string };

  onApresentarDadosUsuario: () => void;

};