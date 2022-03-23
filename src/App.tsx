import React, { Component } from 'react'
import { PageLayout } from './components/main/PageLayout'

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react"
import ProfileContent from './components/authentication/ProfileContent'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Login from './pages/login'


interface IProps {}
interface IState {}

export default class App extends Component<IProps,IState> {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout />} >
           <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

    )
  }
}


