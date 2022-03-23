import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import React, { Component } from 'react'
import ProfileContent from '../components/authentication/ProfileContent'
import { PageLayout } from '../components/main/PageLayout'

export default class Login  extends Component {
  render() {
    return (
     <PageLayout>
      <AuthenticatedTemplate>
          <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
          <p>Ingreso al sistema</p>
      </UnauthenticatedTemplate>
    </PageLayout>
    )
  }
}


