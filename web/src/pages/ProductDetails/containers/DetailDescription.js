import React, { useState } from 'react'
import styled from 'styled-components'
import marked from 'marked'
import {
  Card, Divider, Flex, Text, Container, Box,
} from '../../../components'
import asset from '../../../constants/asset'

const Arrow = styled.img`
  width: 24px;
  height: 24px;
  transform: ${(props) => (props.collapse ? 'rotate(180deg)' : 'none')};
  transition: all .3s ease-in-out;
`
const DetailDescription = ({ detailMarkdown, descriptionMarkdown }) => {
  const [collapse, setCollaps] = useState(false)
  const handleToggled = () => {
    setCollaps(!collapse)
  }
  return (
    <Card>
      <Container style={{ padding: '10px 16px', cursor: 'pointer' }} onClick={() => handleToggled()}>
        <Flex jc="space-between">
          <Text>Detail & Ukuran</Text>
          <Arrow src={asset.icon.arrowDown} alt="" collapse={collapse} />
        </Flex>
      </Container>
      {
        collapse && (
        <>
          <Divider />
          <div style={{ padding: '10px 16px' }}>
            <Box h="10" />
            <Text>Detail</Text>
            <Box h="10" />
            <Text dangerouslySetInnerHTML={{ __html: marked(detailMarkdown || '') }} />
          </div>
          <Divider />
          <div style={{ padding: '10px 16px' }}>
            <Box h="10" />
            <Text>Panduan Ukuran</Text>
            <Box h="10" />
            <Text dangerouslySetInnerHTML={{ __html: marked(descriptionMarkdown || '') }} />
          </div>
        </>
        )}

    </Card>
  )
}

export default DetailDescription
