import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from '../assets/wrappers/JobInfo'

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  )
}

JobInfo.propTypes = { icon: PropTypes.node, text: PropTypes.string }

export default JobInfo
