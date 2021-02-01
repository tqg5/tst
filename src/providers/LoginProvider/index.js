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

    //validate username. username must be in an email format
    const validateUsername = email => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(email)
    }

    //validate password. password must have more than 3 characters
    //also password must be populated for it to be seen as tried to validate
    const validatePassword = password => {
        return !!password && password.length > 3
    }

    //check if username is validated via our validateUsername function
    //validates on every keystroke
    const setIsUsernameValidated = text => {
        dispatch({
            type: ACTIONS.SET_IS_USERNAME_VALIDATED,
            canConfirm: !!text,
            isValidated: validateUsername(text)
        })
    }

    //check if password is validated via our validatePassword function
    //validates on every keystroke
    const setIsPasswordValidated = text => {
        dispatch({
            type: ACTIONS.SET_IS_PASSWORD_VALIDATED,
            canConfirm: !!text,
            isValidated: validatePassword(text),
            text
        })
    }

    //checks if the confirm field is the same as the password field on every keystroke
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

    //memoizing the variables so we don't get extra renders
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