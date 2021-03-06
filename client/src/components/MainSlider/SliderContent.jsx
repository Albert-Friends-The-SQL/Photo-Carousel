import React from 'react';
import styled from 'styled-components';

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 77vh;
  width: ${props => props.width}px;
  background-color: rgb(236,238,240);
  display: flex;
  overflow: hidden;
`

export default SliderContent