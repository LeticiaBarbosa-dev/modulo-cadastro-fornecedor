import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { SupplierList } from "../../components/List/SupplierList";
import "./style.css";

export function HomePage() {
  return (
    <div>
      <div className="header-container">
        <img src="/logo.svg" alt="" />
        <Link className="link" to="/cadastro">
          <Button type="primary" className="custom-button">
            {" "}
            <PlusOutlined className="icon" />
            <span>Cadastrar Fornecedor</span>
          </Button>
        </Link>
      </div>
      <SupplierList />
    </div>
  );
}
