import styled from 'styled-components'
import { Typography } from 'antd'

const { Title } = Typography

export default styled(Title)`
  &.ant-typography {
    color: ${props => props.$color ? props.$color : 'white'};
  }
`