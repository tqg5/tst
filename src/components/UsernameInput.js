import TSTInput from './TSTInput'
import { LoginContext } from '../providers/LoginProvider'

//define text constants
const errorText = 'Username must be an email'
const successText = 'Username successfully entered!'
const placeholder = 'username'

export default () => {
    //retrieve props and methods from context
    const {
        setIsUsernameValidated,
        isUsernameValidated,
        canConfirmUsername
    } = LoginContext()

    //validate on every keystroke
    const onInputChange = ({ target: { value }}) => setIsUsernameValidated(value)

    const isValidated = !canConfirmUsername || isUsernameValidated
    const popoverText = isUsernameValidated ? successText : errorText
    
    return (
        <TSTInput
            placeholder={placeholder}
            onChange={onInputChange}
            isValidated={isValidated}
            popoverText={popoverText}
            showPopover={canConfirmUsername}
        />
    )
}