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
    const [ canConfirmPassword, setCanConfirmPassword ] = useState(false)

    useEffect(() => {
        console.log('passwordText', passwordText)
        console.log('confirmPasswordText', confirmPasswordText)
        if(canConfirmPassword) setDoPasswordsMatch(passwordText === confirmPasswordText)
    }, [ passwordText, confirmPasswordText ])

    useEffect(() => {
        setCanConfirmPassword(!!passwordText || (!passwordText && confirmPasswordText))
    }, [ passwordText ])

    console.log('canConfirmPassword', canConfirmPassword)
    console.log('coPasswordsMatch', doPasswordsMatch)

    return (
        <Fragment>
            <Password
                setText={setPasswordText}
            />
            <ConfirmPassword
                isValidated={!canConfirmPassword || doPasswordsMatch}
                canConfirmPassword={canConfirmPassword}
                setText={setConfirmPasswordText}
            />
        </Fragment>
    )
}