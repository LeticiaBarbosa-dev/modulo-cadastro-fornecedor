import { useParams, Link, useNavigate } from "react-router-dom";
import { useSuppliers } from "../../context/SupplierContext";
import { Descriptions, Button, Modal, ConfigProvider } from "antd";
import "./style.css";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

export function SupplierDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { suppliers, deleteSupplier } = useSuppliers();
  const supplier = suppliers.find((f) => f.id === Number(id));
  const navigate = useNavigate();

  if (!supplier) {
    return <p>Fornecedor não encontrado!</p>;
  }

  const handleDelete = () => {
    Modal.confirm({
      title: "Tem certeza que deseja excluir este fornecedor?",
      onOk: () => {
        deleteSupplier(supplier.id);
        navigate("/");
      },
    });
  };

  return (
    <div className="details">
      <div className="header">
        <img src="/logo.svg" alt="" />
        <h1>Detalhes do Fornecedor</h1>
      </div>
      <div className="card">
        <ConfigProvider
          theme={{
            components: {
              Descriptions: {
                contentColor: "#FFFFFF",
                extraColor: "#FFFFFF",
                titleColor: "#FFFFFF",
              },
              Button: {
                dangerColor: "#000000"
              }
            },
          }}
        >
          <Descriptions layout="vertical" title={supplier.nome_fantasia}>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="CNPJ"
            >
              {supplier.cnpj}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="Inscrição Estadual"
            >
              {supplier.inscricao_estadual}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="Razão Social"
            >
              {supplier.razao_social}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="Nome do Responsável"
            >
              {supplier.responsavel}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="CPF do Responsável"
            >
              {supplier.cpf_responsavel}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="Telefone"
            >
              {supplier.telefone}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: -16,
              }}
              label="Email"
            >
              {supplier.email}
            </Descriptions.Item>
          </Descriptions>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              className="button"
              type="primary"
              onClick={() => navigate(-1)}
              icon={<ArrowLeftOutlined />}
            >
              Voltar
            </Button>
            <div>
              <Link to={`/edit/${supplier.id}`}>
                <Button
                  className="button"
                  type="primary"
                  style={{ marginRight: "8px" }}
                  icon={<EditOutlined />}
                >
                  Editar
                </Button>
              </Link>
              <Button
                id="delete-button"
                className="button"
                type="primary"
                danger
                onClick={handleDelete}
                icon={<DeleteOutlined />}
              >
                Excluir
              </Button>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}
