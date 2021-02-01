import React, {
    useReducer,
    useMemo
} from 'react'
import ACTIONS from './Actions'
import Reducer, { initialState } from './Reducer'

const Context = React.createContext({})

export const LoginContext = () => React.useContext(Context)

export default ({ children }) => {
    const [state, dispatch] = useReducer(
        Reducer,
        initialState
    )

    //validate username
    const validateUsername = email => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(email)
    }

    //validate password
    const validatePassword = password => {
        return !!password && password.length > 3
    }

    const validateConfirmPassword = password => {
        return !!state.passwordText || (!state.passwordText && state.confirmPasswordText)
    }

    const setPasswordText = text => {
        dispatch({
            type: ACTIONS.SET_PASSWORD_TEXT,
            text
        })
    }

    const setConfirmPasswordText = text => {
        dispatch({
            type: ACTIONS.SET_CONFIRM_PASSWORD_TEXT,
            text
        })
    }

    const setIsUsernameValidated = text => {
        dispatch({
            type: ACTIONS.SET_IS_USERNAME_VALIDATED,
            canConfirm: !!text,
            isValidated: validateUsername(text)
        })
    }

    const setIsPasswordValidated = text => {
        dispatch({
            type: ACTIONS.SET_IS_PASSWORD_VALIDATED,
            canConfirm: !!text,
            isValidated: validatePassword(text),
            text
        })
    }

    const setIsConfirmPasswordValidated = text => {
        dispatch({
            type: ACTIONS.SET_IS_CONFIRM_PASSWORD_VALIDATED,
            canConfirm: !!state.passwordText || (!state.passwordText && !!text),
            text
        })
    }

    const {
        isUsernameValidated,
        isPasswordValidated,
        isConfirmPasswordValidated,
        canConfirmUsername,
        canConfirmPassword,
        canConfirmConfirmPassword
    } = state

    const value = useMemo(() => ({
        isUsernameValidated,
        isPasswordValidated,
        isConfirmPasswordValidated,
        canConfirmUsername,
        canConfirmPassword,
        canConfirmConfirmPassword,
        setIsUsernameValidated,
        setIsPasswordValidated,
        setIsConfirmPasswordValidated
      }), [
        isUsernameValidated,
        isPasswordValidated,
        isConfirmPasswordValidated,
        canConfirmUsername,
        canConfirmPassword,
        canConfirmConfirmPassword
      ])
    
      return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
      )
}