import React from 'react';
import { ListOfPhotoCard } from '../Container/listOfPhotoCards';
import { ListOfCategories } from '../Components/ListOfCategories';
import { Helmet } from 'react-helmet';



export const Home = ({ id }) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Tigram -Your photo app!</title>
                <meta name='description' content='In Tigram you are able to find animal pictures and pets.  ' />
            </Helmet>
            <ListOfCategories />
            <ListOfPhotoCard categoryId={id} />
        </React.Fragment>

    )
}