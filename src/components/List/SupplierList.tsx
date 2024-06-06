import { Supplier, useSuppliers } from "../../context/SupplierContext";
import { Table } from "../Table/Table";
import { TableCell } from "../Table/TableCell";
import { TableHeader } from "../Table/TableHeader";
import { TableRow } from "../Table/TableRow";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IconButton } from "../IconButton";
import "./style.css";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

const ITEMS_PER_PAGE = 10;

export function SupplierList() {
  const { suppliers } = useSuppliers();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSuppliers, setCurrentSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCurrentSuppliers(suppliers.slice(startIndex, endIndex));
  }, [currentPage, suppliers]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Table>
      <thead>
        <tr className="header-table">
          <TableHeader>CNPJ</TableHeader>
          <TableHeader>Razão Social</TableHeader>
          <TableHeader>Nome Fantasia</TableHeader>
          <TableHeader>Telefone</TableHeader>
          <TableHeader style={{ width: 64 }}></TableHeader>
        </tr>
      </thead>
      <tbody>
        {currentSuppliers.map((supplier) => {
          return (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.cnpj}</TableCell>
              <TableCell>{supplier.razao_social}</TableCell>
              <TableCell>{supplier.nome_fantasia}</TableCell>
              <TableCell>{supplier.telefone}</TableCell>
              <TableCell id="button-view-cell">
                <Link to={`/fornecedor/${supplier.id}`} key="view">
                  <IconButton className="custom-view-button">
                    <EyeOutlined />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </tbody>
      <Pagination
        current={currentPage}
        pageSize={ITEMS_PER_PAGE}
        total={suppliers.length}
        onChange={handlePageChange}
        style={{ marginTop: 12, textAlign: "left" }}
      />
    </Table>
  );
}
