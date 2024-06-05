import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
// import { SupplierList } from "../../components/List/SupplierList";
import "./style.css";
import { SupplierList } from "../../components/List/SupplierList";
// import { Table } from "../../components/Table/Table";

export function HomePage() {
  return (
    <div>
      <div className="header-container">
        <img src="/logo.svg" alt="" />
        <Link className="link" to="/cadastro">
          <Button
            type="primary"
            className="custom-button"
            icon={<PlusOutlined />}
          >
            Cadastrar Fornecedor
          </Button>
        </Link>
      </div>
      <SupplierList />
    </div>
  );
}
