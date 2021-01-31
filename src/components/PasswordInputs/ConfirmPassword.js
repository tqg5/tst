import TSTInput, {
    TYPES
} from '../TSTInput'

export default ({
    setText,
    isValidated
}) => {
    const onInputChange = ({ target: { value }}) => {
        setText(value)
    }

    return (
        <TSTInput
            placeholder='confirm password'
            onChange={onInputChange}
            isValidated={isValidated}
            errorText={`Passwords don't match`}
            type={TYPES.PASSWORD}
        />
    )
}