'use client'

import { styled } from 'styled-components'

interface StyledComponentProps {
  color?: string
  fontSize?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  ul?: {
    padding?: string
    display?: string
  }
}

export const Nav = styled.nav<StyledComponentProps>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || ''};
  margin: ${(props) => props.margin || ''};
  background-color: ${(props) => props.backgroundColor || ''};

  ul {
    padding: ${(props) => props.ul?.padding || ''};
    display: ${(props) => props.ul?.display || 'flex'};
    li {
      padding: 20px;
    }
  }
`
