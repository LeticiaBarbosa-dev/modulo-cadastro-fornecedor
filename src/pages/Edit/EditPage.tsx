import { SupplierForm } from "../../components/Form/SupplierForm";
import "./style.css";
import { Header } from "../../components/Header/Header";

export function EditPage() {
  return (
    <>
      <Header title="Editar Fornecedor" />
      <div className="custom-edit-page">
        <SupplierForm />
      </div>
    </>
  );
}
