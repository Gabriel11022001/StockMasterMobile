import Navigation from "@/navigation";
import { CadastroClienteProvider } from "./view/CadastroCliente";

export default function Index() {
  return (
    <CadastroClienteProvider>
      <Navigation />
    </CadastroClienteProvider>
  );
}
