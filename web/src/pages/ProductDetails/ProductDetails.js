import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Main, Card, Flex, LoadingIcon, Text,
} from '../../components'
import ImageSlider from './containers/ImageSlider'
import MainInfo from './containers/MainInfo'
import DetailDescription from './containers/DetailDescription'
import ProductList from '../Products/containers/ProductList'
import { getProductDetails } from '../../services/productService'
import { setTitle } from '../../store/actions/uiActions'

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null)
  const [slug, setSlug] = useState(props.match.params.slug)
  useEffect(() => {
    _getProductDetails()
  }, [])

  useEffect(() => {
    if (slug !== props.match.params.slug) {
      setSlug(props.match.params.slug)
      _getProductDetails()
    }
  })

  const _getProductDetails = () => {
    props.setTitle('')
    setSlug(props.match.params.slug)
    getProductDetails(props.match.params.slug).subscribe((res) => {
      setProduct(res)
      props.setTitle(res.title)
      window.scrollTo({ top: 0 })
    })
  }
  if (product === null) {
    return (
      <Flex fd="column">
        <LoadingIcon />
        <Text caption>Sedang Memuat...</Text>
      </Flex>
    )
  }

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

export default connect(null, { setTitle })(ProductDetails)
