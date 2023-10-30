"use client"

import { Button, Drawer, Table } from 'antd';
import { dashboardProductColumn } from "@/app/_data/productData"
import { useContext, useEffect, useState } from 'react';
import ProductFrom from '@/app/dashboard/_components/ProductFrom';
import { ProductContext } from '@/app/_context/ProductContextProvider';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const ProductPage = () => {

  const { productData } = useContext(ProductContext);


  console.log(`🚀 ~ productData:`, productData)
  
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [entityId, setEntityId] = useState<number | null>(null)

  const productId = searchParams.get('productId')

  useEffect(() => {

    if (!isOpenDrawer){
      setEntityId(null)
      router.push(pathname)
    } 
  }, [isOpenDrawer])


  useEffect(() => {
    setEntityId(Number(productId))

    if (productId){
      setIsOpenDrawer(true)
    } else {
      setIsOpenDrawer(false)
    }
  }, [productId])

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
          <ProductFrom entityId={entityId} setIsOpenDrawer={setIsOpenDrawer} />
        </Drawer>
      </div>

      <Table
        dataSource={productData}
        columns={dashboardProductColumn}
      />
    </main>
  );
};

export default ProductPage;