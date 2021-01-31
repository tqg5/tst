import { Fragment } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import ErrorText from '../ErrorText'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const TYPES = {
    USERNAME: 'username',
    PASSWORD: 'password'
}

export default ({
    isValidated,
    value,
    onChange,
    placeholder,
    errorText,
    type = TYPES.USERNAME
}) => {
    const Component = type === TYPES.USERNAME ? InputWrapper : PasswordWrapper

    return (
        <Wrapper>
            <ErrorText
                isVisible={!isValidated}
                text={errorText}
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
    border-color: ${props => props.$isValidated ? 'green' : 'red'};
    margin-bottom: 25px;
`

const InputWrapper = styled(Input)`
    border-color: ${props => props.$isValidated ? 'green' : 'red'};
    margin-bottom: 25px;
`