import React from 'react';
import {Link, Nav } from './styles';
import { MdPerson,MdFavoriteBorder } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

const SIZE = '30px'

export const NavBar = () => {
    return (
        <Nav>
            <Link to='/'><RiHome3Line size={SIZE}/></Link>
            <Link to='favs'><MdFavoriteBorder size={SIZE}/></Link>
            <Link to='/user'><MdPerson size={SIZE}/></Link>
        </Nav>
    )
}