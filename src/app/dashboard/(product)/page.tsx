"use client"

import { Button, Drawer, Table } from 'antd';
import { productList, dashboardProductColumn } from "@/app/_data/productData"
import { useEffect, useState } from 'react';
import ProductFrom from '../_components/ProductFrom';


const ProductPage = () => {

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [entityId, setEntityId] = useState<number | null>(null)

  useEffect(() => {
    setEntityId(0)
  },[])

  return (
    <main className="px-10 py-2">

      <div className='glass p-5 flex justify-end'>

        <Button onClick={() => setIsOpenDrawer(true)} size="large" className='text-base '>
            Add Product
        </Button>

        <Drawer
          title={<h3 className='font-bold'>Add User</h3>}
          placement="right"
          open={isOpenDrawer}
          size={"large"}
          onClose={() => setIsOpenDrawer(false)}
        >
          <ProductFrom entityId={entityId} />
        </Drawer>
      </div>

      <Table
        dataSource={productList}
        columns={dashboardProductColumn}
      />
    </main>
  );
};

export default ProductPage;