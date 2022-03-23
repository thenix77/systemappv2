import React, { Component } from 'react'

interface IProps {
  graphData: any
}

interface IState {}

export default class ProfileData extends Component<IProps,IState> {

  render() {
    return (
      <div>
        <p><strong>First Name: </strong> {this.props.graphData.givenName}</p>
        <p><strong>Last Name: </strong> {this.props.graphData.surname}</p>
        <p><strong>Email: </strong> {this.props.graphData.userPrincipalName}</p>
        <p><strong>Id: </strong> {this.props.graphData.id}</p>
      </div>
    )
  }
}
