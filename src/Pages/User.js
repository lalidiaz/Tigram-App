import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../Components/SubmitButton';



export const User = () => {
    const { removeAuth } = useContext(Context)
    return <React.Fragment>
        <SubmitButton onClick={removeAuth}>Log Out</SubmitButton>
    </React.Fragment>



}



