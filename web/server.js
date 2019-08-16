const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (_, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`))
})

app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`There's something errors: ${err}`)
  }
  // eslint-disable-next-line no-console
  console.log(`This App is running on port ${PORT}`)
})
