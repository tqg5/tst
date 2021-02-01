import { Fragment } from 'react'
import Password from './Password'
import ConfirmPassword from './ConfirmPassword'

//Grouping the password fields together since they share semantic resemblances
export default () => (
    <Fragment>
        <Password />
        <ConfirmPassword />
    </Fragment>
)