import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../components'

const Root = styled.div`
  overflow: hidden;
`
const MainImage = styled(Flex)`
  transition: all .3s ease-in-out;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 800px;
  }
`
const Thumbnail = styled.div`
  width: 56px;
  height: 56px;
  padding: 3px;
  margin: 0px 4px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.active && props.theme.color.primary};
  flex-shrink: 1;
  cursor: pointer;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
`
const ImageSlider = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <Root>
      <MainImage jc="flex-start" style={{ marginLeft: `${activeIdx * -100}%` }}>
        {
          images.map((image, i) => (
            <img key={i} src={image.fullUrl} alt="" />
          ))
        }
      </MainImage>
      <Flex style={{ overflow: 'auto', padding: '8px 12px' }} jc="flex-start">
        { images.length > 1 &&
          images.map((image, i) => (
            <Thumbnail key={i} active={activeIdx === i} onClick={() => setActiveIdx(i)}>
              <img src={image.fullUrl} alt="" />
            </Thumbnail>
          ))
        }
      </Flex>
    </Root>
  )
}

export default ImageSlider
