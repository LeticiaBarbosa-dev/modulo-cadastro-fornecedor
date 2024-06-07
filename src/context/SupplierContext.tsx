import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

export interface Supplier {
  id: string;
  cnpj: string;
  inscricao_estadual: string;
  razao_social: string;
  nome_fantasia: string;
  responsavel: string;
  cpf_responsavel: string;
  telefone: string;
  email: string;
}

import { v4 as uuidv4 } from "uuid";

interface SuppliersContextProps {
  suppliers: Supplier[];
  addSupplier: (supplier: Omit<Supplier, "id">) => void;
  updateSupplier: (supplierSupdated: Supplier) => void;
  deleteSupplier: (id: string) => void;
  getSupplierById: (id: string) => Supplier | undefined;
}

const SuppliersContext = createContext<SuppliersContextProps | undefined>(
  undefined
);

interface SupplierProviderProps {
  children: ReactNode;
}

export const SuppliersProvider: React.FC<SupplierProviderProps> = ({
  children,
}) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(() => {
    const storedSuppliers = localStorage.getItem("fornecedores");
    return storedSuppliers ? JSON.parse(storedSuppliers) : [];
  });

  useEffect(() => {
    localStorage.setItem("fornecedores", JSON.stringify(suppliers));
  }, [suppliers]);

  const addSupplier = (supplier: Omit<Supplier, "id">) => {
    const newSupplier = { ...supplier, id: uuidv4() };
    setSuppliers((prevSuppliers) => [...prevSuppliers, newSupplier]);
  };

  const updateSupplier = (supplierUpdated: Supplier) => {
    setSuppliers((prevSuppliers) =>
      prevSuppliers.map((supplier) =>
        supplier.id === supplierUpdated.id ? supplierUpdated : supplier
      )
    );
  };

  const deleteSupplier = (id: string) => {
    setSuppliers((prevSuppliers) =>
      prevSuppliers.filter((supplier) => supplier.id !== id)
    );
  };

  const getSupplierById = (id: string): Supplier | undefined => {
    return suppliers.find((supplier) => supplier.id === id);
  };

  return (
    <SuppliersContext.Provider
      value={{
        suppliers,
        addSupplier,
        updateSupplier,
        deleteSupplier,
        getSupplierById,
      }}
    >
      {children}
    </SuppliersContext.Provider>
  );
};

export const useSuppliers = () => {
  const context = useContext(SuppliersContext);
  if (!context)
    throw new Error(
      "useFornecedores must be used within a FornecedoresProvider"
    );
  return context;
};
