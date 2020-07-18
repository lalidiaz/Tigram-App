import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Article, ImageWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../Container/ToggleLikeMutations'
import { Link } from '@reach/router';

// I dont want to render all the pictures if the user is not looking at them 
// useRef to get the element's reference in the DOM

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'



export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, ref] = useNearScreen()
    

    return (
    <Article ref={ref} >
    {
        show && <Fragment>
            <Link to={`/detail/${id}`}>
                <ImageWrapper>
                    <Img src={src} />
                </ImageWrapper>
            </Link>
            <ToggleLikeMutation>
                {
                    (toggleLike)/*the mutation i want to do */ => {
                        const handleFavClick = () => {
                            toggleLike({variables: {
                                input: { id }
                            }})
                            
                        }
                        return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                    }
                }

            </ToggleLikeMutation>

        </Fragment>
            }

        </Article>
    )
}

