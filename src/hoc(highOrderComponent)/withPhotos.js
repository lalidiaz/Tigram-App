import {graphql} from 'react-apollo'
import {gql} from 'apollo-boost' //going to allow me to do the queries as string and apollo is going to understand.

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
  `

export const withPhotos = graphql(GET_PHOTOS)