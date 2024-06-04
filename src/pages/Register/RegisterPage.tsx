import { SupplierForm } from "../../components/Form/SupplierForm";
import "./style.css";

export function RegisterPage() {
  return (
    <div className="custom-register-page">
      <div className="header">
        <img src="/logo.svg" alt="" />
        <h1>Cadastro de Fornecedor</h1>
      </div>
      <SupplierForm />
    </div>
  );
}
