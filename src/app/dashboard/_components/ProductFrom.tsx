import { Button, Col, Form, Input, Row, Select } from 'antd';
import Image from 'next/image';
import React from 'react';

interface PropsType {
  entityId: number | null;
}

const ProductFrom: React.FC<PropsType> = ({ entityId }) => {

  const handleSubmit = (value: any) => {
    console.log(value)
  }

  return (
    <Form layout='vertical' onFinish={handleSubmit}>
      <Row gutter={[20, 0]}>
        <Col md={24}>
          <Form.Item label="Product Name" name="product_name">
            <Input />
          </Form.Item>
        </Col>

        <Col md={12}>
          <Form.Item label="Price" name="price">
            <Input type='number' />
          </Form.Item>
        </Col>

        <Col md={12}>
          <Form.Item label="Image" name="image">
            <Select defaultValue={"product-1"}>
              <Select.Option value={"product-1"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 1</span>
                  <Image src={`/assets/products/product-1.png`} width="40" height="40" alt=''/>
                </div>
              </Select.Option>

              <Select.Option value={"product-2"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 2</span>
                  <Image src={`/assets/products/product-2.png`} width="40" height="40" alt=''/>
                </div>
              </Select.Option>
            
              <Select.Option value={"product-3"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 3</span>
                  <Image src={`/assets/products/product-3.png`} width="40" height="40" alt=''/>
                </div>
              </Select.Option>
            
              <Select.Option value={"product-4"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 4</span>
                  <Image src={`/assets/products/product-4.png`} width="40" height="40" alt=''/>
                </div>
              </Select.Option>
            
              <Select.Option value={"product-5"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 5</span>
                  <Image src={`/assets/products/product-5.png`} width="40" height="40" alt=''/>
                </div>
              </Select.Option>
            
              <Select.Option value={"product-6"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 6</span>
                  <Image src={`/assets/products/product-6.png`} width="40" height="40" alt=''/>
                </div>
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col md={24}>
          <Form.Item label="Product Description" name="product_description">
            <Input.TextArea />
          </Form.Item>
        </Col>

        <Col md={24}>
          <Form.Item className='text-right'>
            <Button type="primary" htmlType='submit' className='font-bold text-base'>Submit</Button>
          </Form.Item>
        </Col>

      </Row>
    </Form>
  );
};

export default ProductFrom;