import { composeWrappers } from 'react-compose-wrappers'
import LoginProvider from '../providers/LoginProvider'

export default composeWrappers([
    props => <LoginProvider children={props.children} />
])