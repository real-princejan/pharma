import React, { useState } from "react";
import { Modal, Select, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const ProductForm = ({ visible, onCancel, onSuccess, categories }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleCreate = async () => {
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("quantity", quantity);
      productData.append("price", price);
      productData.append("photo", photo);
      productData.append("category", category);

      const { data } = await axios.post(
        "/api/v1/product/create-product",
        productData
      );

      if (data?.success) {
        message.success(data?.message);
        onSuccess();
      } else {
        message.error("Product creation failed");
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <Modal
        title="Create Product"
        visible={visible}
        onCancel={onCancel}
        onOk={handleCreate}
      >
        <div className="mb-4">
          <Select
            placeholder="Select a category"
            style={{ width: "100%" }}
            onChange={(value) => setCategory(value)}
          >
            {categories?.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Upload
            customRequest={() => {}}
            showUploadList={false}
            beforeUpload={(file) => {
              setPhoto(file);
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </div>
        <div className="mb-2">
          {photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="product photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <Input
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="number"
            placeholder="Price (Php)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <Select
          placeholder="Do you want to ship it?"
          style={{ width: "100%" }}
          onChange={(value) => setShipping(value)}
        >
          <Option value="0">No</Option>
          <Option value="1">Yes</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default ProductForm;
