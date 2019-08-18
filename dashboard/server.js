const express = require('express')
const path = require('path')

const app = express()
const PORT = 3001

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (_, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`))
})

app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`There's something errors: ${err}`)
  }
  // eslint-disable-next-line no-console
  console.log(`This App is running on port ${PORT}`)
})
