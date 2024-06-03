import { useParams, Link, useNavigate } from "react-router-dom";
import { useSuppliers } from "../../context/SupplierContext";
import { Descriptions, Button, Modal } from "antd";

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
    <div>
      <Descriptions title="Detalhes do Fornecedor">
        <Descriptions.Item label="Nome">{supplier.nome}</Descriptions.Item>
        <Descriptions.Item label="Email">{supplier.email}</Descriptions.Item>
        <Descriptions.Item label="Telefone">
          {supplier.telefone}
        </Descriptions.Item>
      </Descriptions>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button type="primary" onClick={() => navigate(-1)}>
          Voltar
        </Button>
        <div>
          <Link to={`/edit/${supplier.id}`}>
            <Button type="primary" style={{ marginRight: "8px" }}>
              Editar
            </Button>
          </Link>
          <Button type="primary" danger onClick={handleDelete}>
            Excluir
          </Button>
        </div>
      </div>
    </div>
  );
}
