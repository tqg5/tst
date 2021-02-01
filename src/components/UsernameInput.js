import TSTInput from './TSTInput'
import { LoginContext } from '../providers/LoginProvider'

const errorText = 'Username must be an email'
const successText = 'Username successfully entered!'

export default () => {
    const {
        setIsUsernameValidated,
        isUsernameValidated,
        canConfirmUsername
    } = LoginContext()

    const onInputChange = ({ target: { value }}) => {
        setIsUsernameValidated(value)
    }

    return (
        <TSTInput
            placeholder='username'
            onChange={onInputChange}
            isValidated={!canConfirmUsername || isUsernameValidated}
            popoverText={isUsernameValidated ? successText : errorText}
            showPopover={canConfirmUsername}
        />
    )
}