import React from "react";
import { createPancakeEntry } from "./api/api";
import { Form, Input, Button, DatePicker, Rate } from "antd";

/* 

{
	"title": "BackStacks",
	"address": "550 N. Stephanie St. Suite #D Henderson, NV 89014",
	"rating": 3,
	"visitDate": "2021-09-26T02:26:48.529Z",
	"image": "https://fastly.4sqi.net/img/general/width960/TP5AGYDR4JIXYODUSA35NCOCPELZEXWX0YOZ2ZVC4OFX23MT.jpg"
}

*/

const PancakeForm = (props) => {
  

  const handleSubmit = (values) => {
    console.log("Values: ", values);

    const entries = {
      title: values.title,
      address: values.address,
      rating: values.rating,
      visitDate: values.date,
    };

    createPancakeEntry(entries);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="large"
        onFinish={handleSubmit}
      >
        <Form.Item label="Title" name="title" required>
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address" required>
          <Input />
        </Form.Item>
        <Form.Item label="Rating" name="rating">
          <Rate />
        </Form.Item>
        <Form.Item label="Visited Date" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PancakeForm;
