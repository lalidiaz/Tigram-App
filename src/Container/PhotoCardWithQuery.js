import React from 'react';
import { PhotoCard } from '../Components/PhotoCard';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo'; //Query is a special component that will allow me to use RenderProp.


const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    } 
  }
`

const renderProp = ({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    if (data) {
        const { photo = {} } = data
        return <PhotoCard {...photo} />
    }
    return null;
}


export const PhotoCardWithQuery = ({ id }) => (
    //renderProps, i need to render a function.
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
        {renderProp}
    </Query>

)