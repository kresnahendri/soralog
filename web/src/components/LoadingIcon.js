import styled from 'styled-components'
import asset from '../constants/asset'

export default styled.div`
  width: 32px;
  height: 32px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px auto;
  background-image: url(${asset.icon.loading});
  font-family: GothamSSm-Book;
  font-weight: normal;
`
