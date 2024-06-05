import { SupplierForm } from "../../components/Form/SupplierForm";
import "./style.css";

export function EditPage() {
  return (
    <div className="custom-edit-page">
      <div className="header">
        <img src="/logo.svg" alt="" />
        <h1>Editar Fornecedor</h1>
      </div>
      <SupplierForm />
    </div>
  );
}
