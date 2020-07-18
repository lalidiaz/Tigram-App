import React, { useContext } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Logo } from './Components/Logo';
import { Detail } from './Pages/Detail';
import { Home } from './Pages/Home';
import { Router, Redirect } from '@reach/router';
import { NavBar } from './Components/NavBar';
import { Favs } from './Pages/Favs';
import { User } from './Pages/User';
import { NotRegisteredUser } from './Pages/NotRegisteredUser'
import { Context } from './Context';
import { NotFound } from './Pages/NotFound';





export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <React.Fragment>
      
      <GlobalStyle />
      <Logo />
      <Router >
      <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </React.Fragment>
  )

}


