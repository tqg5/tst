import {
    Fragment,
    useState
} from 'react'
import { Input,Tooltip } from 'antd'
import styled from 'styled-components'

import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    EyeOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons'

export const TYPES = {
    USERNAME: 'username',
    PASSWORD: 'password'
}

export default ({
    showPopover,
    isValidated,
    onChange,
    placeholder,
    popoverText,
    type = TYPES.USERNAME
}) => {
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)

    const inputType = type === TYPES.PASSWORD && !isPasswordVisible ? 'password' : 'text'
    
    return (
        <Wrapper>
            <InputWrapper
                placeholder={placeholder}
                onChange={onChange}
                $isValidated={isValidated} //transient prop so we don't get the "React deos not recognize the `X` prop"
                type={inputType}
                suffix={
                    <Fragment>
                        <TooltipWrapper $isVisible={showPopover} title={popoverText}>
                            { showPopover && <InputStatus isValidated={isValidated} /> }
                        </TooltipWrapper>
                        {
                            type === TYPES.PASSWORD && (
                                <EyeComponent
                                    isVisible={isPasswordVisible}
                                    setPasswordVisibility={setIsPasswordVisible}
                                />
                            )
                        }
                    </Fragment>
                }
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 400px;
`

const EyeComponent = ({
    isVisible,
    setPasswordVisibility
}) => {
    return (
        <EyeComponentWrapper onClick={() => setPasswordVisibility(!isVisible)}>
            {
                isVisible
                ? <EyeOutlined />
                : <EyeInvisibleOutlined />
            }
        </EyeComponentWrapper>
    )
}

const InputStatus = ({ isValidated, ...props }) => (
    isValidated
    ? <CheckCircleOutlined {...props} style={{ color: 'rgba(0,255,0)' }} />
    : <CloseCircleOutlined {...props} style={{ color: 'rgba(255,0,0)' }} />
)

const EyeComponentWrapper = styled.div`
    margin-left: 10px;
`

const InputWrapper = styled(Input)`
    border-color: ${props => props.$isValidated ? '#4d91db' : 'red'};
    margin-bottom: 25px;
`

const TooltipWrapper = styled(Tooltip)`
    display: ${props => props.$isVisible ? 'block': 'none'};
`