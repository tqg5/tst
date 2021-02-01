import { LoginContext } from '../../providers/LoginProvider'
import TSTInput, {
    TYPES
} from '../TSTInput'

//define text constants
const errorText = `Passwords don't match`
const successText = 'Passwords match!'
const placeholder = 'confirm password'

export default () => {
    //retrieve props and methods from context
    const {
        setIsConfirmPasswordValidated,
        isConfirmPasswordValidated,
        canConfirmConfirmPassword
    } = LoginContext()

    //validate on every keystroke
    const onInputChange = ({ target: { value }}) => setIsConfirmPasswordValidated(value)

    const isValidated = !canConfirmConfirmPassword || isConfirmPasswordValidated
    const popoverText = isConfirmPasswordValidated ? successText : errorText

    return (
        <TSTInput
            placeholder={placeholder}
            onChange={onInputChange}
            isValidated={isValidated}
            popoverText={popoverText}
            showPopover={canConfirmConfirmPassword}
            type={TYPES.PASSWORD}
        />
    )
}