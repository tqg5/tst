import { Input } from 'antd'
import styled from 'styled-components'
import ErrorText from '../ErrorText'

export const TYPES = {
    USERNAME: 'username',
    PASSWORD: 'password'
}

export default ({
    showPopover,
    isValidated,
    value,
    onChange,
    placeholder,
    popoverText,
    type = TYPES.USERNAME
}) => {
    const Component = type === TYPES.USERNAME ? InputWrapper : PasswordWrapper
    
    return (
        <Wrapper>
            <ErrorText
                isVisible={showPopover}
                text={popoverText}
            >
                <Component
                    placeholder={placeholder}
                    onChange={onChange}
                    $isValidated={isValidated} //transient prop so we don't get the "React deos not recognize the `X` prop"
                    value={value}
                />
            </ErrorText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 400px;
`

const PasswordWrapper = styled(Input.Password)`
    border-color: ${props => props.$isValidated ? '#4d91db' : 'red'};
    margin-bottom: 25px;
`

const InputWrapper = styled(Input)`
    border-color: ${props => props.$isValidated ? '#4d91db' : 'red'};
    margin-bottom: 25px;
`