import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  Text, Box, Divider, Flex, Button,
} from '../../../components'
import { resetProducts } from '../../../store/actions/productActions'

const Root = styled.div`
  position: relative;
  height: 100vh;
  position: fixed;
  width: 250px;
  max-width: 250px;
  right: ${(props) => (props.show ? 0 : '-300px')};
  top: 0;
  background: white;
  transition: all .3s ease-in-out;
  z-index: 100;
  padding: 16px;
`
const Bg = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background: rgba(0,0,0,.8);
  top: 0;
  left: 0;
  cursor: pointer;
  display: ${(props) => (props.show ? 'block' : 'none')};
`
const ActionWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 90%;
  bottom: 30px;
  padding: 20px 0;
  background: #fafafa;
`
const ColorCheck = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px;
  background: ${(props) => props.color};
  border-radius: 100%;
  flex-shrink: 1;
  border: 3px solid ${(props) => (props.checked ? props.theme.color.primary : 'transparent')};
  cursor: pointer;
`
const colors = [
  { hex: '#2ED1A2', value: 'Tosca' },
  { hex: '#4a4a4a', value: 'Grey' },
  { hex: '#E1AD01', value: 'Mustard' },
  { hex: '#1b1b1b', value: 'Dark Grey' },
  { hex: '#000080', value: 'Navy' },
]
const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const prices = [
  { value: '<50', label: 'Dibawah 50 ribu' },
  { value: '50-100', label: '50-100 ribu' },
  { value: '100-150', label: '100-150 ribu' },
  { value: '>150', label: 'Diatas 150 ribu' },
]
const SizeCheck = styled.div`
  margin: 5px;
  padding: 5px 8px;
  border: 2px solid ${(props) => (props.checked ? props.theme.color.primary : props.theme.color.grey01)};
  color: ${(props) => (props.checked ? props.theme.color.primary : props.theme.color.grey01)};
  cursor: pointer;
`
const FilterSidebar = ({
  onClose, onFilter, show, ...props
}) => {
  const [checkedColors, setCheckedColors] = React.useState([])
  const [checkedSizes, setCheckedSizes] = React.useState([])
  const [selectedPrice, setSelectedPrice] = React.useState('')

  const handleCheckPrice = (e) => {
    e.preventDefault()
    setSelectedPrice(e.target.value)
  }
  const handleCheckColor = (checked) => {
    const idx = checkedColors.findIndex((c) => c === checked)
    if (idx === -1) {
      setCheckedColors([...checkedColors, checked])
    } else {
      setCheckedColors([
        ...checkedColors.splice(0, idx),
        ...checkedColors.splice(idx, checkedColors.length - 1),
      ])
    }
  }
  const handleCheckSize = (checked) => {
    const idx = checkedSizes.findIndex((c) => c === checked)
    if (idx === -1) {
      setCheckedSizes([...checkedSizes, checked])
    } else {
      setCheckedSizes([
        ...checkedSizes.splice(0, idx),
        ...checkedSizes.splice(idx, checkedSizes.length - 1),
      ])
    }
  }
  const handleReset = () => {
    setCheckedColors([])
    setCheckedSizes([])
    setSelectedPrice('')
  }
  const handleFilter = () => {
    props.resetProducts([])
    onFilter(0, 5, 'createdAt', checkedColors, checkedSizes, selectedPrice).subscribe()
    onClose()
  }
  return (
    <>
      <Bg onClick={() => onClose()} show={show} />
      <Root show={show}>
        <Text title>Filter</Text>
        <Box h="10" />
        <Text bold>Rentang Harga</Text>
        <select name="" id="" onChange={handleCheckPrice}>
          <option value="">Semua Harga</option>
          {
            prices.map((p) => (
              <option value={p.value} selected={selectedPrice === p.value}>{p.label}</option>
            ))
          }
        </select>
        <Box h="20" />
        <Divider />
        <Box h="10" />

        <Text bold>Pilih warna</Text>
        <Flex fw="wrap" jc="flex-start">
          {
            colors.map((c) => (
              <ColorCheck
                color={c.hex}
                onClick={() => handleCheckColor(c.value)}
                checked={checkedColors.findIndex((checked) => checked === c.value) !== -1}
              />
            ))
          }
        </Flex>
        <Box h="20" color="" />
        <Divider />
        <Box h="10" />

        <Text bold>Pilih ukuran</Text>
        <Flex fw="wrap" jc="flex-start">
          {
            sizes.map((s) => (
              <SizeCheck
                onClick={() => handleCheckSize(s)}
                checked={checkedSizes.findIndex((checked) => checked === s) !== -1}
              >{s}
              </SizeCheck>
            ))
          }
        </Flex>
        <Box h="20" color="" />
        <Divider />

        <ActionWrapper>
          <Button color="white" onClick={() => handleReset()}>Reset</Button>
          <div style={{ width: '20px' }} />
          <Button onClick={() => handleFilter()}>Filter</Button>
        </ActionWrapper>
      </Root>
    </>
  )
}

export default connect(null, { resetProducts })(FilterSidebar)
