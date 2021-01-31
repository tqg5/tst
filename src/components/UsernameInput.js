import { useState } from 'react'
import TSTInput from './TSTInput'

export default () => {
    const [ isValidated, setIsValidated ] = useState(false)
    const [ text, setText ] = useState(null)

    //validate username
    const validateUsername = email => {
        // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // console.log(pattern.test(email))
        // return pattern.test(email)
        return !!email
    }

    const onInputChange = e => {
        //only want to validate if there is an entry
        console.log(e.target.value)
        setText(e.target.value)

        setIsValidated(validateUsername(e.target.value))
    }

    return (
        <TSTInput
            validate={validateUsername}
            placeholder='username'
            onChange={onInputChange}
            isValidated={isValidated}
            errorText='Must have a username'
            value={text}
        />
    )
}