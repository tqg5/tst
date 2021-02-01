import TSTInput, {
    TYPES
} from '../TSTInput'

const errorText = `Passwords don't match`
const successText = 'Passwords match!'

export default ({
    setText,
    isValidated,
    canConfirmPassword
}) => {
    const onInputChange = ({ target: { value }}) => {
        setText(value)
    }

    return (
        <TSTInput
            placeholder='confirm password'
            onChange={onInputChange}
            isValidated={isValidated}
            popoverText={isValidated ? successText : errorText}
            showPopover={canConfirmPassword}
            type={TYPES.PASSWORD}
        />
    )
}