import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";
import { SupplierList } from "../../components/List/SupplierList";
import logo from "../../assets/logo.svg";

export function HomePage() {
  return (
    <div className="container">
      <div className="header-container">
        <img src={logo} alt="" />
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
