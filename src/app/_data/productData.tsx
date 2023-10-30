import { List, Popover } from "antd"
import Link from "next/link"
import { EllipsisOutlined } from '@ant-design/icons';
export const productList = [
  {
    id: 1,
    product_name: "Rowney",
    product_description: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 75,
    image: "product-1"
  },
  {
    id: 2,
    product_name: "Fredrick",
    product_description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 36,
    image: "product-2"
  },
  {
    id: 3,
    product_name: "Mildred",
    product_description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    price: 38,
    image: "product-3"
  },
  {
    id: 4,
    product_name: "Cristi",
    product_description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 70,
    image: "product-4"
  },
  {
    id: 5,
    product_name: "Rickert",
    product_description: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 53,
    image: "product-5"
  },
  {
    id: 6,
    product_name: "Weston",
    product_description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    price: 86,
    image: "product-6"
  }
]

export const dashboardProductColumn: {}[] = [
  {
    title: 'Sl. No.',
    render: (text: string, record: {}, index: number) => index + 1,
  },
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
  },
  {
    title: 'Description',
    dataIndex: 'product_description',
    key: 'product_description',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    align: 'right',
    dataIndex: '',
    key: '',
    render: (text: string, record: { id: number }, index: number) => {
      return (
        <>
          <Popover placement="bottomRight" title={""} overlayInnerStyle={{ padding: 0, boxShadow: "0px 0px 4px 0px #00000040" }} content={
            <List size="small" bordered={false}>
              <List.Item style={{ padding: 0 }}>
                <Link href={`/dashboard?productId=${record?.id}`} className='pl-5 pr-9 py-1.5'>Edit</Link>
              </List.Item>
              <List.Item style={{ padding: 0 }}>
                <Link href={"/settings"} className='pl-5 pr-9 py-1.5 text-sub-text hover:text-red-400'>Remove</Link>
              </List.Item>
            </List>
          } trigger="click">
            <button type="button">
              <EllipsisOutlined style={{ fontSize: 24 }} />
            </button>
          </Popover>
        </>
      )
    },
  },
]