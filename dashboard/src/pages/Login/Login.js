import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { toastr } from 'react-redux-toastr'
import authService from '../../services/authService'
import history from '../../routes/history'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value

    authService.login(username, password)
      .subscribe({
        next: () => {
          history.push('/')
          toastr.success('Success', 'Login Success')
        },
        error: (error) => toastr.error('Error', error.response.data.message),
      })
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="username"
            label="Username"
            margin="dense"
            name="username"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            margin="dense"
            name="password"
            variant="outlined"
            type="password"
            required
          />
        </div>
        <div style={{ height: '10px' }} />
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </form>
    </Box>
  )
}

export default Login
