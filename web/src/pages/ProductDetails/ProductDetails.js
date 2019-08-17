import React, { useState, useEffect } from 'react'
import { Main, Card } from '../../components'
import ImageSlider from './containers/ImageSlider'
import MainInfo from './containers/MainInfo'
import DetailDescription from './containers/DetailDescription'
import ProductList from '../Products/containers/ProductList'

const mockProduct = {
  slug: 'hala-nasia-texture-flare-muslim-dress-',
  title: 'HALA Nasia Texture Flare Muslim Dress',
  quantity: 544,
  material: 'Cotton',
  price: {
    amount: 229000,
    currency: 'IDR',
    __typename: 'Money',
  },
  images: [
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/e49a4fa5-b2c6-4d44-a8df-b66af7881c01',
      height: 800,
      width: 800,
      filePath: 'e49a4fa5-b2c6-4d44-a8df-b66af7881c01',
      tags: [],
      __typename: 'ImageV2',
    },
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/584d19bd-4706-4a0d-b0af-fdd2067235f4',
      height: 800,
      width: 800,
      filePath: '584d19bd-4706-4a0d-b0af-fdd2067235f4',
      tags: [],
      __typename: 'ImageV2',
    },
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/b633e924-80c5-4bdc-977a-4ab0ff9dd559',
      height: 800,
      width: 800,
      filePath: 'b633e924-80c5-4bdc-977a-4ab0ff9dd559',
      tags: [],
      __typename: 'ImageV2',
    },
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/12ee1b90-d101-42a1-af54-c99243f39f80',
      height: 800,
      width: 800,
      filePath: '12ee1b90-d101-42a1-af54-c99243f39f80',
      tags: [],
      __typename: 'ImageV2',
    },
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/c65fe147-436b-486b-98a7-63dba9af4af9',
      height: 800,
      width: 800,
      filePath: 'c65fe147-436b-486b-98a7-63dba9af4af9',
      tags: [],
      __typename: 'ImageV2',
    },
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/246ea9d7-9019-4b58-95df-17486bda167d',
      height: 800,
      width: 800,
      filePath: '246ea9d7-9019-4b58-95df-17486bda167d',
      tags: [],
      __typename: 'ImageV2',
    },
    {
      fullUrl: 'https://imager-next.freetls.fastly.net/images/resized/480/5051a42d-cfce-40ab-ba86-e3af3b8b567a',
      height: 800,
      width: 800,
      filePath: '5051a42d-cfce-40ab-ba86-e3af3b8b567a',
      tags: [],
      __typename: 'ImageV2',
    },
  ],
  detailMarkdown: '**Bahan :** Katun Rami  \n**Detail :** Resleting belakang',
  descriptionMarkdown: '**Warna : Broken White, Dark Green, Maroon, dan Navy (kiri ke kanan)**  \n\n**Size S**  \nLingkar dada 90 cm  \nLebar bahu 36 cm  \nPanjang lengan 52 cm  \nLingkar lengan 45 cm  \nPanjang 140 cm  \n**Size M**  \nLingkar dada 94 cm  \nLebar bahu 37 cm  \nPanjang lengan 52 cm  \nLingkar lengan 47 cm  \nPanjang 140 cm  \n**Size L**  \nLingkar dada 100 cm  \nLebar bahu 39 cm  \nPanjang lengan 53 cm  \nLingkar lengan 49 cm  \nPanjang 140 cm  \n**Size XL**  \nLingkar dada 110 cm  \nLebar bahu 41 cm  \nPanjang lengan 54 cm  \nLingkar lengan 53 cm  \nPanjang 140 cm  \n**Ukuran Sorabel**',
  variants: [
    {
      color: 'Nude',
      id: 'a6c5dcdd-682e-439b-96e9-9fab2d338b2f',
      quantity: 8,
      size: 'L',
      sku: 'SSI-D02265942-LL-NDE',
      title: 'Y&F Avanch Plain Simple Mini Dress (L,Nude)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Maroon',
      id: 'f8c028af-3e1f-4273-b043-80a42c146fc7',
      quantity: 1,
      size: 'L',
      sku: 'SSI-D02265932-LL-MAR',
      title: 'Y&F Avanch Plain Simple Mini Dress (L,Maroon)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Navy',
      id: 'c5bc56b4-3a55-4272-9618-9086c6f7e7e6',
      quantity: 2,
      size: 'L',
      sku: 'SSI-D02265938-LL-NAV',
      title: 'Y&F Avanch Plain Simple Mini Dress (L,Navy)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Nude',
      id: 'd0b7f8ef-7e37-4958-a3ba-47dc6b499235',
      quantity: 0,
      size: 'M',
      sku: 'SSI-D02265950-MM-NDE',
      title: 'Y&F Avanch Plain Simple Mini Dress (M,Nude)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Maroon',
      id: '8874e247-b9c8-452d-bca3-c64087fddbe0',
      quantity: 25,
      size: 'M',
      sku: 'SSI-D02265958-MM-MAR',
      title: 'Y&F Avanch Plain Simple Mini Dress (M,Maroon)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Navy',
      id: 'a321979b-0611-4457-a96a-ab5ac3cd7b4e',
      quantity: 0,
      size: 'M',
      sku: 'SSI-D02265966-MM-NAV',
      title: 'Y&F Avanch Plain Simple Mini Dress (M,Navy)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Nude',
      id: 'a665e6e6-d4b1-46ad-b606-7a80fff3a690',
      quantity: 0,
      size: 'S',
      sku: 'SSI-D02265975-SS-NDE',
      title: 'Y&F Avanch Plain Simple Mini Dress (S,Nude)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Maroon',
      id: 'cb31b7cd-6b68-4e62-b06f-3fc9fa2ec5f4',
      quantity: 32,
      size: 'S',
      sku: 'SSI-D02265914-SS-MAR',
      title: 'Y&F Avanch Plain Simple Mini Dress (S,Maroon)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Navy',
      id: '767594d9-97ee-4b03-bcb8-158f95ba70f7',
      quantity: 0,
      size: 'S',
      sku: 'SSI-D02265940-SS-NAV',
      title: 'Y&F Avanch Plain Simple Mini Dress (S,Navy)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Nude',
      id: '8bfb1b2c-955e-4591-9c17-da53f9d6401c',
      quantity: 25,
      size: 'XL',
      sku: 'SSI-D02265934-XL-NDE',
      title: 'Y&F Avanch Plain Simple Mini Dress (XL,Nude)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Navy',
      id: 'ffa99e87-ed54-4389-bd53-272b5ef9fb68',
      quantity: 0,
      size: 'XL',
      sku: 'SSI-D02265949-XL-NAV',
      title: 'Y&F Avanch Plain Simple Mini Dress (XL,Navy)',
      __typename: 'ProductVariant',
    },
    {
      color: 'Maroon',
      id: '5904e7ad-8df4-4f59-ba8b-dfef4f7ae8e8',
      quantity: 89,
      size: 'XL',
      sku: 'SSI-D02265902-XL-MAR',
      title: 'Y&F Avanch Plain Simple Mini Dress (XL,Maroon)',
      __typename: 'ProductVariant',
    },
  ],

}

const ProductDetails = () => {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setProduct(mockProduct)
    }, 100)
  }, [])
  if (product === null) return null
  return (
    <Main>
      <Card>
        <ImageSlider images={product.images} />
        <MainInfo
          title={product.title}
          price={product.price.amount}
          material={product.material}
          variants={product.variants}
        />
      </Card>
      <DetailDescription
        detailMarkdown={product.detailMarkdown}
        descriptionMarkdown={product.descriptionMarkdown}
      />
      <ProductList />
    </Main>
  )
}

export default ProductDetails
