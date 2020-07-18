import React, {useContext, Fragment } from 'react';
import {Context} from '../Context';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../Container/RegisterMutation';
import { LoginMutation } from '../Container/LoginMutation';


export const NotRegisteredUser = () => {
    const {activateAuth} = useContext(Context)

    return <Fragment>
    <RegisterMutation>
        {
            (register, {data, loading, error}) => {
                const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables })
                    .then( ({data}) => {
                        const {singup} = data
                        activateAuth(singup)                 
                    })
                    .catch( (error) => { console.log(error.graphQLErrors[0].message) ; });
                }
                const errorMessage = error && "The user already exist or there is a problem. "
                return <React.Fragment>
                <UserForm disabled={loading} error={errorMessage} title='Register' onSubmit={onSubmit} />       
                </React.Fragment>
            }
        }
    </RegisterMutation>

    <LoginMutation>
        {
            (login, {data, loading, error}) => {
                const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables })
                    .then( ({data}) => {
                        const {login} = data
                        activateAuth(login)

                    })
        
                    .catch( (error) => { console.log(error.graphQLErrors[0].message) ; });
                }

                const errorMessage = error && "Password is not correct or the user does not exist."
                return <UserForm disabled={loading} error={errorMessage} title='Log In' onSubmit={onSubmit} /> 
            }
        }
    </LoginMutation>
</Fragment>

}
             

