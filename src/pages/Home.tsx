import React, { Component } from 'react'
import PersonalInfo from '../components/PersonalInfo/PersonalInfo'
import PortfolioWork from '../components/PortfolioWork/PortfolioWork'

export default class Home extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <PortfolioWork />
      </>
    )
  }
}
