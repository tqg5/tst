import { useState } from 'react'
import TSTInput, {
    TYPES
} from '../TSTInput'

export default ({
    setText
}) => {
    const [ isValidated, setIsValidated ] = useState(false)

    //validate password
    const validatePassword = password => {
        return !!password
    }

    const onInputChange = ({ target: { value }}) => {
        setText(value)

        setIsValidated(validatePassword(value))
    }

    return (
        <TSTInput
            placeholder='password'
            onChange={onInputChange}
            isValidated={isValidated}
            errorText='Password must not be empty'
            type={TYPES.PASSWORD}
        />
    )
}