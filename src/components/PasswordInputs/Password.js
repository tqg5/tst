import { useState } from 'react'
import TSTInput, {
    TYPES
} from '../TSTInput'

const errorText = 'Password must contain more than 3 characters'
const successText = 'Password successfully entered'

export default ({
    setText
}) => {
    const [ isValidated, setIsValidated ] = useState(false)
    const [ canConfirmPassword, setCanConfirmPassword ] = useState(false)

    //validate password
    const validatePassword = password => {
        return !!password && password.length > 3
    }

    const onInputChange = ({ target: { value }}) => {
        setText(value)

        setCanConfirmPassword(!!value)
        setIsValidated(validatePassword(value))
    }

    console.log('canConfirmPassword', canConfirmPassword)
    return (
        <TSTInput
            placeholder='password'
            onChange={onInputChange}
            isValidated={!canConfirmPassword || isValidated}
            popoverText={isValidated ? successText : errorText}
            showPopover={canConfirmPassword}
            type={TYPES.PASSWORD}
        />
    )
}