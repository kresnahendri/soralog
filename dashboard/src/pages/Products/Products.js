import React from 'react'
import {
  Modal, AppBar, Box, Toolbar, Typography, Button,
} from '@material-ui/core'
import ProductList from './containers/ProductList'
import CreateProduct from './containers/CreateProduct'
import history from '../../routes/history'

const Products = () => {
  const [showCreateModal, setShowCreateModal] = React.useState()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    history.push('/login')
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
        <Button color="primary" variant="contained" onClick={() => setShowCreateModal(true)}>Create</Button>
      </Box>
      <ProductList />
      <Modal
        onClose={() => setShowCreateModal(false)}
        open={showCreateModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <CreateProduct />
      </Modal>
    </div>
  )
}

export default Products
