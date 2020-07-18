import React from 'react';
import { Image, Grid, Link } from './styles';



export const ListOfFavs = ({ favs = [] }) => {
    return <Grid>
        {
            favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
                <Image src={fav.src} />
                </Link>)
        }
    </Grid>
}