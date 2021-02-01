import { LoginContext } from '../../providers/LoginProvider'
import TSTInput, {
    TYPES
} from '../TSTInput'

const errorText = `Passwords don't match`
const successText = 'Passwords match!'

export default () => {
    const {
        setIsConfirmPasswordValidated,
        isConfirmPasswordValidated,
        canConfirmConfirmPassword
    } = LoginContext()

    const onInputChange = ({ target: { value }}) => {
        setIsConfirmPasswordValidated(value)
    }

    return (
        <TSTInput
            placeholder='confirm password'
            onChange={onInputChange}
            isValidated={!canConfirmConfirmPassword || isConfirmPasswordValidated}
            popoverText={isConfirmPasswordValidated ? successText : errorText}
            showPopover={canConfirmConfirmPassword}
            type={TYPES.PASSWORD}
        />
    )
}