import React from 'react'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const DashboardPage = ({isConfirmed}) => (
  <div>
       {!isConfirmed && <ConfirmEmailMessage />}
  </div>
)

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(mapStateToProps, {})(DashboardPage)