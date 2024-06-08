import { SupplierForm } from "../../components/Form/SupplierForm";
import { Header } from "../../components/Header/Header";
import "./style.css";

export function RegisterPage() {
  return (
    <>
      <Header title="Cadastro de Fornecedor" />
      <div className="custom-register-page">
        <SupplierForm />
      </div>
    </>
  );
}
