export const responseSuccess = (res, data, status = 200) => {
  return res.status(status)
    .json({
      status: 'success',
      data,
    })
}

export const responseError = (res, message, status = 500) => {
  return res.status(status)
    .json({
      status: 'error',
      message,
    })
}
