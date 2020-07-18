import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';


const LIKE_PHOTO = gql`
mutation likePhoto ($input: LikePhoto!) {
    likePhoto(input: $input) {
      id, 
      liked,
      likes
    }
  }
  `

export const ToggleLikeMutation = ({children })/*recive a prop as children*/ => {
    return <Mutation mutation={LIKE_PHOTO}>
        {children}
    </Mutation>
}
