import { Button, List } from "antd";
import { Supplier, useSuppliers } from "../../context/SupplierContext";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import "./style.css";

export function SupplierList() {
  const { suppliers } = useSuppliers();

  return (
    <List className="container"
      dataSource={suppliers}
      renderItem={(item: Supplier) => (
        <List.Item className="item"
          actions={[
            <div className="actions-container">
              <Link to={`/fornecedor/${item.id}`} key="view">
                <Button className="custom-view-button" type="default">
                  <EyeOutlined />
                </Button>
              </Link>
            </div>,
          ]}
        >
          <List.Item.Meta className="item-meta"
            title={item.responsavel}
            description={`Email: ${item.email}, Telefone: ${item.telefone}`}
          />
        </List.Item>
      )}
    />
  );
}
