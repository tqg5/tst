import { LoginContext } from '../../providers/LoginProvider'
import TSTInput, {
    TYPES
} from '../TSTInput'

const errorText = 'Password must contain more than 3 characters'
const successText = 'Password successfully entered'

export default () => {
    const {
        setIsPasswordValidated,
        isPasswordValidated,
        canConfirmPassword
    } = LoginContext()

    const onInputChange = ({ target: { value }}) => {
        setIsPasswordValidated(value)
    }

    return (
        <TSTInput
            placeholder='password'
            onChange={onInputChange}
            isValidated={!canConfirmPassword || isPasswordValidated}
            popoverText={isPasswordValidated ? successText : errorText}
            showPopover={canConfirmPassword}
            type={TYPES.PASSWORD}
        />
    )
}