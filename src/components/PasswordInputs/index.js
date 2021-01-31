import {
    Fragment,
    useState,
    useEffect
} from 'react'
import Password from './Password'
import ConfirmPassword from './ConfirmPassword'

export default () => {
    const [ passwordText, setPasswordText ] = useState(null)
    const [ confirmPasswordText, setConfirmPasswordText ] = useState(null)
    const [ doPasswordsMatch, setDoPasswordsMatch ] = useState(false)
    const [ canConfirmValidate, setCanConfirmValidate ] = useState(false)

    useEffect(() => {
        console.log('passwordText', passwordText)
        console.log('confirmPasswordText', confirmPasswordText)
        if(canConfirmValidate) setDoPasswordsMatch(passwordText === confirmPasswordText)
    }, [ passwordText, confirmPasswordText ])

    useEffect(() => {
        setCanConfirmValidate(!!passwordText || (!passwordText && confirmPasswordText))
    }, [ passwordText ])
    console.log('canConfirmValidate', canConfirmValidate)
    console.log('coPasswordsMatch', doPasswordsMatch)

    return (
        <Fragment>
            <Password
                setText={setPasswordText}
            />
            <ConfirmPassword
                isValidated={doPasswordsMatch}
                setText={setConfirmPasswordText}
            />
        </Fragment>
    )
}