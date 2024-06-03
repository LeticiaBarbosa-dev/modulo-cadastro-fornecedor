import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { SuppliersProvider } from "./context/SupplierContext";
import { EditPage } from "./pages/Edit/EditPage";
import { SupplierDetailsPage } from "./pages/Detail/SupplierDetailsPage";

export function App() {
  return (
    <SuppliersProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/fornecedor/:id" element={<SupplierDetailsPage />} />
      </Routes>
    </SuppliersProvider>
  );
}
