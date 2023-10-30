import { ProductContext } from '@/app/_context/ProductContextProvider';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';


const { Option } = Select;

interface PropsType {
  entityId: number | null;
  setIsOpenDrawer: any;
}

const ProductFrom: React.FC<PropsType> = ({ entityId, setIsOpenDrawer }) => {

  const { productData, setProductData } = useContext(ProductContext);

  const [formRef] = Form.useForm();
  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (value: any) => {
    if (entityId) {
      handleUpdate(entityId, value)
    } else {
      handleCreate(value)
    }
  }

  const handleCreate = (value:any) => {
    setProductData((preState:any) => [...preState, {...value, id: Math.random()}])
    setIsOpenDrawer(false)
  }

  const handleUpdate = (entityId:number, value:any) => {
    const updatedData = productData.map((item: any) => {
      return item.id === entityId ? { ...item, ...value } : item
    })
    setProductData(updatedData)
    router.push(pathname)
  }


  useEffect(() => {
    if(entityId) {
      formRef.setFieldsValue(productData.find((data: any) => data.id === entityId))
    } else {
      formRef.setFieldsValue(null)
    }
  }, [entityId])

  return (
    <Form form={formRef} layout='vertical' onFinish={handleSubmit}>
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
            <Select>
              <Option value={"product-1"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 1</span>
                  <Image src={`/assets/products/product-1.png`} width="40" height="40" alt='' />
                </div>
              </Option>

              <Option value={"product-2"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 2</span>
                  <Image src={`/assets/products/product-2.png`} width="40" height="40" alt='' />
                </div>
              </Option>

              <Option value={"product-3"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 3</span>
                  <Image src={`/assets/products/product-3.png`} width="40" height="40" alt='' />
                </div>
              </Option>

              <Option value={"product-4"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 4</span>
                  <Image src={`/assets/products/product-4.png`} width="40" height="40" alt='' />
                </div>
              </Option>

              <Option value={"product-5"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 5</span>
                  <Image src={`/assets/products/product-5.png`} width="40" height="40" alt='' />
                </div>
              </Option>

              <Option value={"product-6"}>
                <div className='flex justify-start items-center gap-5'>
                  <span className='font-bold'>Product 6</span>
                  <Image src={`/assets/products/product-6.png`} width="40" height="40" alt='' />
                </div>
              </Option>
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