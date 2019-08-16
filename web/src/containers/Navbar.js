import React from 'react'
import styled from 'styled-components'
import { Flex } from '../components'

const Root = styled(Flex)`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background: linear-gradient(0deg, rgb(179, 179, 179), rgb(179, 179, 179) 49%, transparent 51%) center bottom / 100% 0.1rem no-repeat rgb(255, 255, 255);
  z-index: 1;
  min-height: 56px;
  justify-content: flex-start;
`
const Wrapper = styled(Flex)`
  width: 100%;
  max-width: 480px;
  margin: 0px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
`
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`
const Title = styled.div`
  flex: 1;
`
const Right = styled.div``

const Navbar = ({ icon, title, right }) => {
  return (
    <Root>
      <Wrapper>
        <Icon src={icon} />
        <Title>{title}</Title>
        <Right>{right}</Right>
      </Wrapper>
    </Root>
  )
}

export default Navbar
