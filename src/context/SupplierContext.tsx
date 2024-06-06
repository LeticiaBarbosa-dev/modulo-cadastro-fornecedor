import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
// import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import axios from 'axios';

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

interface SuppliersContextProps {
  suppliers: Supplier[];
  addSupplier: (supplier: Supplier) => void;
  updateSupplier: (supplier: Supplier) => void;
  deleteSupplier: (id: string) => void;
}

const SuppliersContext = createContext<SuppliersContextProps | undefined>(undefined);

export const SuppliersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])

  useEffect(() => {
    axios.get('http://localhost:5000/fornecedores')
      .then(response => setSuppliers(response.data))
      .catch(error => console.error('Erro ao buscar fornecedores:', error));
  }, []);


  const addSupplier = (supplier: Supplier) => {
    axios.post('http://localhost:5000/fornecedores', supplier)
      .then(response => setSuppliers([...suppliers, response.data]))
      .catch(error => console.error('Erro ao adicionar fornecedor:', error));
  }

  const updateSupplier = (updatedSupplier: Supplier) => {
    axios.put(`http://localhost:5000/fornecedores/${updatedSupplier.id}`, updatedSupplier)
      .then(() => {
        setSuppliers(suppliers.map(supplier =>
          supplier.id === updatedSupplier.id ? updatedSupplier : supplier
        ));
      })
      .catch(error => console.error('Erro ao atualizar fornecedor:', error));
  };

  const deleteSupplier = (id: string) => {
    axios.delete(`http://localhost:5000/fornecedores/${id}`)
      .then(() => {
        setSuppliers(suppliers.filter(supplier => supplier.id !== id));
      })
      .catch(error => console.error('Erro ao deletar fornecedor:', error));
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
