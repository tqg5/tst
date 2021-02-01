import { useState } from 'react'
import TSTInput from './TSTInput'

const errorText = 'Username must be an email'
const successText = 'Username successfully entered!'

export default () => {
    const [ isValidated, setIsValidated ] = useState(false)
    const [ text, setText ] = useState(null)
    const [ canConfirmUsername, setCanConfirmUsername ] = useState(false)

    //validate username
    const validateUsername = email => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(email)
    }

    const onInputChange = ({ target: { value }}) => {
        //only want to validate if there is an entry
        console.log(value)
        setText(value)

        setCanConfirmUsername(!!value)
        setIsValidated(validateUsername(value))
    }

    return (
        <TSTInput
            placeholder='username'
            onChange={onInputChange}
            isValidated={!canConfirmUsername || isValidated}
            popoverText={isValidated ? successText : errorText}
            showPopover={canConfirmUsername}
        />
    )
}