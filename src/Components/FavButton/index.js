import React from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
    const Icon = liked ? FcLike :  MdFavoriteBorder

    return <Button onClick={onClick}>
        <Icon size="22px" />{likes}
    </Button>
}

