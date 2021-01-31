
import styled from 'styled-components'
import { Popover } from 'antd'

export default ({
    isVisible = true,
    text,
    children
}) => (
   <Popover placement='right' content={text} visible={isVisible}>
       {children}
    </Popover>
)