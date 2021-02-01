import { LoginContext } from '../../providers/LoginProvider'
import TSTInput, {
    TYPES
} from '../TSTInput'

//define text constants
const errorText = 'Password must contain more than 3 characters'
const successText = 'Password successfully entered'
const placeholder = 'password'

export default () => {
    //retrieve props and methods from context
    const {
        setIsPasswordValidated,
        isPasswordValidated,
        canConfirmPassword
    } = LoginContext()

    //validate on every keystroke
    const onInputChange = ({ target: { value }}) => setIsPasswordValidated(value)

    const isValidated = !canConfirmPassword || isPasswordValidated
    const popoverText = isPasswordValidated ? successText : errorText

    return (
        <TSTInput
            placeholder={placeholder}
            onChange={onInputChange}
            isValidated={isValidated}
            popoverText={popoverText}
            showPopover={canConfirmPassword}
            type={TYPES.PASSWORD}
        />
    )
}