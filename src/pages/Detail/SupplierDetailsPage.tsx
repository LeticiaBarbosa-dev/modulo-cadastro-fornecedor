import { useParams, Link, useNavigate } from "react-router-dom";
import { useSuppliers } from "../../context/SupplierContext";
import { Descriptions, Button, Modal, ConfigProvider, notification } from "antd";
import "./style.css";
import {
  ArrowLeftOutlined,
  CheckCircleTwoTone,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Header } from "../../components/Header/Header";

export function SupplierDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { deleteSupplier, getSupplierById } = useSuppliers();
  const supplier = getSupplierById(id!);
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const openNotification = () => {
    notification.success({
      message: "Fornecedor excluído!",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
  };

  if (!supplier) {
    return <p>Fornecedor não encontrado!</p>;
  }

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmDelete = () => {
    deleteSupplier(supplier.id);
    navigate("/modulo-cadastro-fornecedor/");
    setModalVisible(false);
    openNotification();
  };

  return (
    <>
      <Header title="Detalhes do Fornecedor" />
      <div className="details">
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
                  dangerColor: "#000000",
                },
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
              <div className="edit-delete-container-button">
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
                  onClick={handleOpenModal}
                  icon={<DeleteOutlined />}
                >
                  Excluir
                </Button>
                <Modal
                  className="modal-custom"
                  title="Tem certeza que deseja excluir este fornecedor?"
                  open={modalVisible}
                  onCancel={handleCloseModal}
                  footer={[
                    <Button key="cancel" onClick={handleCloseModal}>
                      Não
                    </Button>,
                    <Button
                      key="confirm"
                      type="primary"
                      onClick={handleConfirmDelete}
                    >
                      Sim
                    </Button>,
                  ]}
                >
                  <p>Tem certeza que deseja excluir este fornecedor?</p>
                </Modal>
              </div>
            </div>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
