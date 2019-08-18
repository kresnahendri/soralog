import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import ProductForm from './ProductForm'
import { getProducts } from '../../../store/actions/productActions'
import productService from '../../../services/productService'

const CreateProduct = (props) => {
  const handleSubmit = (body) => {
    productService.createProduct(body)
      .subscribe({
        next: () => {
          toastr.success('Success', 'Product created')
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
        <Typography variant="h6">Add Product</Typography>
        <ProductForm
          onSubmit={(body) => handleSubmit(body)}
          values={{}}
        />
      </Paper>
    </Box>
  )
}

export default connect(null, { getProducts })(CreateProduct)
