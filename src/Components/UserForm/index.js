import React from 'react';
import { useImputValue } from '../../hooks/useImputValue';
import { Form, Input, Title, Error } from './styles';
import {SubmitButton} from '../SubmitButton';


export const UserForm = ({ disabled, error, onSubmit, title }) => {

    const email = useImputValue("")
    const password = useImputValue("")

const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({email: email.value, password: password.value})
}

    return (
        <React.Fragment>
            <Form disabled={disabled} onSubmit={handleSubmit}>
            <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' value={email.value} onChange={email.onChange} />
                <Input disabled={disabled} placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
                <SubmitButton disabled={disabled} >{title}</SubmitButton>
            </Form>
            {error&& <Error>{error}</Error>}
        </React.Fragment>

    )

}
