import Cliente from "@/app/tipos/cliente";
import { createContext, useContext, useState } from "react";

type CadastroClienteContextType = {
  clienteCadastro: Cliente | null;
  setClienteCadastro: (clienteCadastro: Cliente | null) => void;
};

const CadastroClienteContext = createContext<CadastroClienteContextType | undefined>(undefined);

export const CadastroClienteProvider = ({ children }: { children: React.ReactNode }) => {
  const [clienteCadastro, setClienteCadastro] = useState<Cliente | null>(null);

  return (
    <CadastroClienteContext.Provider value={{ clienteCadastro, setClienteCadastro }}>
      {children}
    </CadastroClienteContext.Provider>
  );
};

export const useCadastroCliente = () => {
  const contexto = useContext(CadastroClienteContext);

  if (!contexto) {
    throw Error("Erro ao tentar-se obter o contexto do cadastro do cliente!");
  }

  return contexto;
};
