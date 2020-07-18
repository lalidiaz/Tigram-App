import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import Context from './Context';




const client = new ApolloClient({
  uri: 'https://petgram-backend-one.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ""
    operation.setContext({
      headers:{
        authorization
      }
    })
  },
   onError: error =>{
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token'){
      window.sessionStorage.removeItem('token')
      window.location.href ='/'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
