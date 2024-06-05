import { useSuppliers } from "../../context/SupplierContext";
import { Table } from "../Table/Table";
import { TableCell } from "../Table/TableCell";
import { TableHeader } from "../Table/TableHeader";
import { TableRow } from "../Table/TableRow";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IconButton } from "../IconButton";
import "./style.css";

export function SupplierList() {
  const { suppliers } = useSuppliers();
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
        {suppliers.map((supplier) => {
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
      {/* <tfoot>
        <tr>
          <TableCell colSpan={3}>
            Mostrando {attendees.length} de {total} itens
          </TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>
                Página {page} de {totalPages}
              </span>
              <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton
                  onClick={goToNextPage}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton
                  onClick={goToLastPage}
                  disabled={page === totalPages}
                >
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tr>
      </tfoot> */}
    </Table>
  );
}
