import { useEffect } from "react";
import { Supplier, useSuppliers } from "../../context/SupplierContext";
import { Form, Input, Button, Space, ConfigProvider } from "antd";
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
      <Form form={form} onFinish={onFinish} layout="vertical" labelAlign="left">
        <div className="form card">
          <ConfigProvider theme={{
            components: {
              Form: {
                labelColor: "#FFFFFF",
              }
            }
          }}>
            <div>
              <Form.Item className="custom-label" label="CNPJ">
                <Space>
                  <Form.Item
                    name="cnpj"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Por favor, insira o CPNJ do fornecedor",
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
                        message:
                          "Por favor, insira o número de inscrição do fornecedor",
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
                        message:
                          "Por favor, insira a razão social do fornecedor",
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
                        message:
                          "Por favor, insira o nome fantasia do fornecedor",
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
                        message: "Por favor, insira o nome do responsável",
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
                        message: "Por favor, insira o CPF responsável",
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
                        message: "Por favor, insira o telefone do fornecedor",
                      },
                    ]}
                  >
                    <Input className="input" />
                  </Form.Item>
                </Space>
              </Form.Item>
              <Form.Item className="custom-label" label="E-mail">
                <Space>
                  <Form.Item name="email" noStyle>
                    <Input className="input" />
                  </Form.Item>
                </Space>
              </Form.Item>
            </div>
          </ConfigProvider>
        </div>

        <div>
          <Form.Item className="container-button">
            <Button
              id="voltar"
              className="button"
              icon={<ArrowLeftOutlined />}
              type="primary"
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
            <Button
              className="button"
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
            >
              {isEditing ? "Salvar" : "Salvar"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
