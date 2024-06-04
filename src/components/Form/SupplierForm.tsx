import { useEffect } from "react";
import { Supplier, useSuppliers } from "../../context/SupplierContext";
import { Form, Input, Button, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import "./style.css";

export function SupplierForm() {
  const { addSupplier, updateSupplier, suppliers } = useSuppliers();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm();

  const isEditing = !!id;
  const currentSupplier = suppliers.find((f) => f.id === Number(id));

  useEffect(() => {
    if (isEditing && currentSupplier) {
      form.setFieldsValue(currentSupplier);
    }
  }, [isEditing, currentSupplier, form]);

  const onFinish = (values: Omit<Supplier, "id">) => {
    if (isEditing && currentSupplier) {
      updateSupplier({ ...currentSupplier, ...values });
    } else {
      addSupplier(values);
    }
    navigate("/");
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <div className="form">
          <div>
            <Form.Item className="custom-label" label="CNPJ">
              <Space>
                <Form.Item
                  name="cnpj"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item className="custom-label" label="Inscrição Estadual">
              <Space>
                <Form.Item
                  name="inscricao_estadual"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item className="custom-label" label="Razão Social">
              <Space>
                <Form.Item
                  name="razao_social"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item className="custom-label" label="Nome Fantasia">
              <Space>
                <Form.Item
                  name="nome_fantasia"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
          </div>
          <div>
            <Form.Item className="custom-label" label="Responsável">
              <Space>
                <Form.Item
                  name="responsavel"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item className="custom-label" label="CPF">
              <Space>
                <Form.Item
                  name="cpf_responsavel"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item className="custom-label" label="Telefone">
              <Space>
                <Form.Item
                  name="telefone"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item className="custom-label" label="E-mail">
              <Space>
                <Form.Item
                  name="email"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome do fornecedor",
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
              </Space>
            </Form.Item>
          </div>
        </div>

        <div>
          <Form.Item className="botoes">
            <Button id="voltar" className="botao" type="primary" onClick={() => navigate("/")}>
              <ArrowLeftOutlined />
              Voltar
            </Button>
            <Button className="botao" type="primary" htmlType="submit">
              <SaveOutlined />
              {isEditing ? "Atualizar" : "Salvar"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
