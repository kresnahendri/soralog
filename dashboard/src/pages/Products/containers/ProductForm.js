/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import {
  TextField, Button,
} from '@material-ui/core'
import styled from 'styled-components'

const FormGroup = styled.div`
  display: flex;
  > div, button {
    margin: 10px;
  }
`
const Select = styled.select`
  margin: 10px;
  width: 100%;
  height: 40px;
  padding: 10px;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #4f4f4f;
`

const categories = [
  'Blouse',
  'Dress',
  'Muslim',
  'Big',
  'Baju',
  'Mini Dress',
]
const ProductForm = ({ onSubmit, values: propValues }) => {
  const [values, setValues] = React.useState(propValues)
  React.useEffect(() => {
    setValues(propValues)
  }, [values, propValues])

  const _generateVariants = (colorsStr, sizesStr) => {
    const sizes = sizesStr.replace(/ /g, '').split(',')
    const colors = colorsStr.replace(/ /g, '').split(',')

    let variants = []
    colors.forEach((c) => {
      const withSize = sizes.map((s) => {
        return {
          color: c,
          size: s.toUpperCase(),
        }
      })

      variants = [...variants, ...withSize]
    })

    return variants
  }

  const _generateImages = (imagesStr) => {
    const images = imagesStr.replace(' ', '').split(',')
    return images.map((url) => {
      return {
        fullUrl: url,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      descriptionMarkdown: e.target.descriptionMarkdown.value,
      detailMarkdown: e.target.detailMarkdown.value,
      images: _generateImages(e.target.images.value),
      material: e.target.material.value,
      price: {
        amount: e.target.price.value,
      },
      quantity: e.target.quantity.value,
      slug: e.target.title.value.replace(/ /g, '-').toLowerCase(),
      title: e.target.title.value,
      variants: _generateVariants(e.target.colors.value, e.target.sizes.value),
      category: e.target.category.value || 'Dress',
    }
    onSubmit(body)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: '20px' }}
    >
      <FormGroup>
        <TextField
          label="Title"
          margin="dense"
          name="title"
          variant="outlined"
          required
          defaultValue={values.title}
          fullWidth
        />
        <TextField
          label="Material"
          margin="dense"
          name="material"
          variant="outlined"
          required
          defaultValue={values.material}
          fullWidth
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="Price"
          margin="dense"
          name="price"
          variant="outlined"
          required
          defaultValue={values.price}
          type="number"
          fullWidth
        />
        <TextField
          label="Quantity"
          margin="dense"
          name="quantity"
          variant="outlined"
          required
          defaultValue={values.quantity}
          type="number"
          fullWidth
        />
        <Select name="category" required>
          <option value="" />
          {
            categories.map((c) => (
              <option value={c} key={c} selected={values.category === c}>{c}</option>
            ))
          }

        </Select>
      </FormGroup>

      <FormGroup>
        <TextField
          label="Colors (seperate with comma. ex: Yellow, Red, Green)"
          margin="dense"
          name="colors"
          variant="outlined"
          required
          defaultValue={values.colors}
          fullWidth
        />
        <TextField
          label="Sizes (seperate with comma. ex: X, L, XL)"
          margin="dense"
          name="sizes"
          variant="outlined"
          required
          defaultValue={values.sizes}
          type="text"
          fullWidth
        />
      </FormGroup>
      <FormGroup>
        <Textarea
          name="images"
          rows={10}
          placeholder="Images: ex: http://image-url-1.jpg, http://image-url-2.jpg"
          defaultValue={values.images}
        />
      </FormGroup>
      <FormGroup>
        <Textarea
          name="descriptionMarkdown"
          rows={10}
          placeholder="Description: write in markdown mode"
          defaultValue={values.descriptionMarkdown}
        />
        <Textarea
          name="detailMarkdown"
          rows={10}
          placeholder="Detail: write in markdown mode"
          defaultValue={values.detailMarkdown}
        />
      </FormGroup>
      <FormGroup>
        <Button variant="contained" fullWidth color="primary" type="submit">Submit</Button>
      </FormGroup>
    </form>
  )
}

export default ProductForm
