import React from 'react'
import { PhotoCard } from '../PhotoCard'



export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {} ) => {
 
    return (
        <ul>
            {
                photos.map(photo => <PhotoCard key={photo.id} {...photo} />
            )}
        </ul>
    )
}

