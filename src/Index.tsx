import React from 'react'
import ReactDOM from 'react-dom'
import App from '@components/App/App'
import './Index.module.scss'
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from 'utils/client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
