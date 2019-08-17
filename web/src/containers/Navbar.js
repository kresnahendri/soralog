import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '../components'
import asset from '../constants/asset'

const Root = styled(Flex)`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background: linear-gradient(0deg, rgb(179, 179, 179), rgb(179, 179, 179) 49%, transparent 51%) center bottom / 100% 0.1rem no-repeat rgb(255, 255, 255);
  z-index: 10;
  min-height: 56px;
  justify-content: flex-start;
`
const Wrapper = styled(Flex)`
  width: calc(100% - 32px);
  max-width: 448px;
  margin: 0px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  const [link, setLink] = useState('/')
  const isRootPath = window.location.pathname === '/'
  useEffect(() => {
    if (window.location.pathname.includes('/producs')) {
      setLink('/')
    }
  })
  return (
    <Root>
      <Wrapper>
        {
          !isRootPath && (
            <Link to={link}>
              <Icon src={icon} />
            </Link>
          )}
        {
          isRootPath
            ? <div style={{ flex: 1 }}><img src={asset.icon.logo} alt="" style={{ width: '115px' }} /></div>
            : <Title>{title}</Title>
        }

        <Right>{right}</Right>
      </Wrapper>
    </Root>
  )
}

export default Navbar
