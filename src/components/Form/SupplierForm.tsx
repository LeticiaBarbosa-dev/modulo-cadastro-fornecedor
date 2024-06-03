import { useEffect } from "react";
import { Supplier, useSuppliers } from "../../context/SupplierContext";
import { Form, Input, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

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
        <Form.Item
          name="cnpj"
          label="CNPJ"
          rules={[
            {
              required: true,
              message: "Por favor, insira o nome do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="inscricao_estadual"
          label="Inscrição Estadual"
          rules={[
            {
              required: true,
              message: "Por favor, insira o email do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="razao_social"
          label="Razão Social"
          rules={[
            {
              required: true,
              message: "Por favor, insira o telefone do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nome_fantasia"
          label="Nome Fantasia"
          rules={[
            {
              required: true,
              message: "Por favor, insira o telefone do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="responsavel"
          label="Responsável"
          rules={[
            {
              required: true,
              message: "Por favor, insira o telefone do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cpf_responsavel"
          label="CPF"
          rules={[
            {
              required: true,
              message: "Por favor, insira o telefone do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="telefone"
          label="Telefone"
          rules={[
            {
              required: true,
              message: "Por favor, insira o telefone do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: "Por favor, insira o telefone do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isEditing ? "Atualizar" : "Salvar"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
