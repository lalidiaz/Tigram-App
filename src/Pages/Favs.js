import React from 'react';
import {FavsWithQuery} from '../Container/GetFav'
import { Layout } from '../Components/Layout';


export const Favs = () => (

    <React.Fragment>
        <Layout title='Your favourites' subtitle='Here you will find your favourites.' />
        <FavsWithQuery />
    </React.Fragment>

)