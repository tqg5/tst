import ACTIONS from './Actions'

export const initialState = {
    isUsernameValidated: false,
    isPasswordValidated: false,
    isConfirmPasswordValidated: false,
    canConfirmUsername: false,
    canConfirmPassword: false,
    canConfirmConfirmPassword: false,
    passwordText: null,
    confirmPasswordText: null
}

export default (state, action) => {
    const {
        type,
        canConfirm,
        isValidated,
        text
    } = action

    switch(type) {
        case ACTIONS.SET_IS_USERNAME_VALIDATED:
            return {
                ...state,
                canConfirmUsername: canConfirm,
                isUsernameValidated: isValidated
            }
        case ACTIONS.SET_IS_PASSWORD_VALIDATED:
            debugger
            return {
                ...state,
                canConfirmPassword: canConfirm,
                isPasswordValidated: isValidated,
                isConfirmPasswordValidated: text === state.confirmPasswordText,
                passwordText: text
            }
        case ACTIONS.SET_IS_CONFIRM_PASSWORD_VALIDATED:
            debugger
            return {
                ...state,
                canConfirmConfirmPassword: canConfirm,
                isConfirmPasswordValidated: state.passwordText === text,
                confirmPasswordText: text
            }
    }
}