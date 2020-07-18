import { withPhotos } from '../hoc(highOrderComponent)/withPhotos'
import { ListOfPhotoCardComponent } from '../Components/ListOfPhotoCard'


export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent)// as a param the component that I want to inject by props the data. 


//this component does the data fetching. 
//ListOfPhotoCardsComponent wrap that info with the data that we need. 