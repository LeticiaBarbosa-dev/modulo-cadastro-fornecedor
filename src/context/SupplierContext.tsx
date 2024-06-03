import React, { createContext, useState, ReactNode, useContext } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

export interface Supplier {
  id: number;
  cnpj: string;
  inscricao_estadual: string;
  razao_social: string;
  nome_fantasia: string;
  responsavel: string;
  cpf_responsavel: string;
  telefone: string;
  email: string;
}

interface SuppliersContextProps {
  suppliers: Supplier[];
  addSupplier: (supplier: Omit<Supplier, 'id'>) => void;
  updateSupplier: (supplier: Supplier) => void;
  deleteSupplier: (id: number) => void;
}

const SuppliersContext = createContext<SuppliersContextProps | undefined>(undefined);

export const SuppliersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(() => {
    const storedSuppliers = loadFromLocalStorage<Supplier[]>('fornecedores');
    return storedSuppliers ?? [];
  });

  const addSupplier = (supplier: Omit<Supplier, 'id'>) => {
    const newSupplier: Supplier = { ...supplier, id: suppliers.length + 1 };
    setSuppliers((prev) => {
      const updatedSupliers = [...prev, newSupplier];
      saveToLocalStorage('fornecedores', updatedSupliers);
      return updatedSupliers;
    });
  };

  const updateSupplier = (supplier: Supplier) => {
    setSuppliers((prev) => {
      const updatedSuppliers = prev.map((f) => (f.id === supplier.id ? supplier : f));
      saveToLocalStorage('fornecedores', updatedSuppliers);
      return updatedSuppliers;
    });
  };

  const deleteSupplier = (id: number) => {
    setSuppliers((prev) => {
      const updatedSuppliers = prev.filter((f) => f.id !== id);
      saveToLocalStorage('fornecedores', updatedSuppliers);
      return updatedSuppliers;
    });
  };

  return (
    <SuppliersContext.Provider value={{ suppliers, addSupplier, updateSupplier, deleteSupplier }}>
      {children}
    </SuppliersContext.Provider>
  );
};

export const useSuppliers = () => {
  const context = useContext(SuppliersContext);
  if (!context) throw new Error('useFornecedores must be used within a FornecedoresProvider');
  return context;
};
