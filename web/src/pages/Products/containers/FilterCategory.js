import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex, Button } from '../../../components'
import { resetProducts } from '../../../store/actions/productActions'
import FilterSidebar from './FilterSidebar'

const Select = styled(Flex)`
  flex-direction: column;
  text-align: center;
  margin: 5px 0;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  box-shadow: 0px 10px 20px 1px rgba(0,0,0,.4);
  li {
    padding: 5px;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.primary}
    }
  }
  animation: fadeIn .2s;
  @keyframes fadeIn {
    from { transform: translateY(-5px); opacity: .3; }
    to { transform: translateY(0); opacity: 1; }
  }
`
const FilterCategory = (props) => {
  const [showSort, setShowSort] = React.useState(false)
  const [showFilter, setShowFilter] = React.useState(false)
  const [sort, setSort] = React.useState('-createdAt')

  const handleSort = (selected) => {
    if (sort !== selected) {
      props.resetProducts([])
      props.onSort(0, 5, selected).subscribe()
    }
    setSort(selected)
    setShowSort(false)
  }
  return (
    <>
      <Flex jc="flex-start" ai="flex-start" style={{ paddingBottom: '15px' }}>
        <div style={{ width: '100%', paddingRight: '3px' }}>
          <Button color="white" style={{ minWidth: '0', marginRight: '20px' }} onClick={() => setShowSort(!showSort)}>Urutkan</Button>
          {
            showSort && (
              <Select>
                <ul>
                  <li role="presentation" onClick={() => handleSort('-createdAt')}>Terbaru</li>
                  <li role="presentation" onClick={() => handleSort('createdAt')}>Terlama</li>
                  <li role="presentation" onClick={() => handleSort('price.amount')}>Termurah</li>
                  <li role="presentation" onClick={() => handleSort('-price.amount')}>Termahal</li>
                </ul>
              </Select>
            )}
        </div>
        <div style={{ width: '100%', paddingLeft: '3px' }}>
          <Button color="white" style={{ minWidth: '0' }} onClick={() => setShowFilter(!showFilter)}>Filter</Button>
        </div>
      </Flex>
      <FilterSidebar onClose={() => setShowFilter(false)} show={showFilter} onFilter={props.onSort} />
    </>
  )
}

export default connect(null, { resetProducts })(FilterCategory)
