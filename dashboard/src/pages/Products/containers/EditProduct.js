import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import ProductForm from './ProductForm'
import productService from '../../../services/productService'
import { getProducts } from '../../../store/actions/productActions'

const UpdateProduct = (props) => {
  const [values] = React.useState({
    ...props.values,
    price: props.values.price.amount,
    images: props.values.images.map((i) => i.fullUrl).join(', '),
    sizes: [...new Set(props.values.variants.map((v) => v.size))].join(', '),
    colors: [...new Set(props.values.variants.map((v) => v.color))].join(', '),
  })

  const handleSubmit = (body) => {
    productService.updateProduct(values._id, body)
      .subscribe({
        next: () => {
          toastr.success('Success', 'Product updated')
          props.getProducts()
        },
        error: (error) => toastr.error('Error', error.response.data.message),
      })
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper style={{
        width: '95%',
        padding: '15px',
        marginTop: '20px',
      }}
      >
        <Typography variant="h6">Edit Product</Typography>
        <ProductForm
          onSubmit={(body) => handleSubmit(body)}
          values={values}
        />\
      </Paper>
    </Box>
  )
}

export default connect(null, { getProducts })(UpdateProduct)
