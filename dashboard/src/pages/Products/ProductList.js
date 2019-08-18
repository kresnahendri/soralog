/* eslint-disable no-alert */
import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Paper,
  Table,
  CircularProgress,
  Box,
  Button,
} from '@material-ui/core'
import { finalize } from 'rxjs/operators'
import { toastr } from 'react-redux-toastr'
import productService from '../../services/productService'
import history from '../../routes/history'

const ProductList = () => {
  const [products, setProducts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken === null) {
      history.push('/login')
    }
    productService.getProducts()
      .pipe(
        finalize(() => setIsLoading(false))
      )
      .subscribe({
        next: (res) => setProducts(res),
      })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    history.push('/login')
  }

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
          setProducts(newProducts)
          toastr.success('Success', 'Item deleted')
        },
        error: (error) => toastr.error('Error', error.response.data.message),
      })
  }

  return (
    <div>
      <AppBar position="fixed" style={{ background: 'rgb(172, 20, 90)' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Toolbar>
            <Typography variant="h6" noWrap>
            Soralog Dashboard
            </Typography>
          </Toolbar>
          <Typography
            variant="button"
            noWrap
            style={{ marginRight: '20px', cursor: 'pointer' }}
            onClick={() => handleLogout()}
          >
            Logout
          </Typography>
        </Box>
      </AppBar>
      <Box display="flex" justifyContent="flex-end" style={{ margin: '80px auto 0', textAlign: 'right' }}>
        <Button color="primary" variant="contained">Create</Button>
      </Box>
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
                        <Button color="primary">Edit</Button>
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
    </div>
  )
}

export default ProductList
