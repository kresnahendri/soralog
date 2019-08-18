/* eslint-disable no-alert */
import React from 'react'
import {
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Paper,
  Table,
  CircularProgress,
  Box,
  Button,
  Modal,
} from '@material-ui/core'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import productService from '../../../services/productService'
import history from '../../../routes/history'
import EditProduct from './EditProduct'
import { getProducts, setProducts } from '../../../store/actions/productActions'

const ProductList = (props) => {
  const { products, isLoading } = props
  const [showEditModal, setShowEditModal] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState(null)

  React.useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken === null) {
      history.push('/login')
    }
    props.getProducts()
  }, [])

  const handleDeleteProduct = (id) => {
    productService.deleteProduct(id)
      .subscribe({
        next: () => {
          const removedIdx = products.findIndex((product) => product._id === id)
          const newProducts = (removedIdx === 0)
            ? products.splice(1, products.length - 1)
            : [
              ...products.splice(0, removedIdx),
              ...products.splice(removedIdx, products.length - 1),
            ]
          props.setProducts(newProducts)
          toastr.success('Success', 'Item deleted')
        },
        error: (error) => toastr.error('Error', error.response.data.message),
      })
  }

  return (
    <div>
      {
        isLoading && (
          <Box display="flex">
            <CircularProgress style={{ margin: '80px auto' }} color="secondary" />
          </Box>
        )}

      <Paper style={{ marginTop: '20px' }}>
        {
          products.length > 0 && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Total Variants</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.slug}>
                    <TableCell>
                      <img src={product.images[0].fullUrl} style={{ width: '50px' }} alt="" />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.title}
                    </TableCell>
                    <TableCell align="right">{product.price.amount}</TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">{product.variants.length}</TableCell>
                    <TableCell align="right">{product.category}</TableCell>
                    <TableCell align="right">
                      <Box display="flex">
                        <Button
                          color="primary"
                          onClick={() => {
                            setSelectedProduct(product)
                            setShowEditModal(true)
                          }}
                        >Edit
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => {
                            const r = window.confirm('Are you sure you wish to delete this item?')
                            if (r) {
                              handleDeleteProduct(product._id)
                            }
                          }}
                        >Delete
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
      </Paper>
      <Modal
        onClose={() => setShowEditModal(false)}
        open={showEditModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <EditProduct values={selectedProduct} />
      </Modal>
    </div>
  )
}

export default connect(
  (state) => ({
    products: state.product.products,
    isLoading: state.product.isLoading,
  }),
  {
    getProducts,
    setProducts,
  }
)(ProductList)
