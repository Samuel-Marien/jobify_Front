import React from 'react'
import Wrapper from '../assets/wrappers/StatItem'
import PropTypes from 'prop-types'

const StatItem = (props) => {
  const { count, title, icon, color, bcg } = props
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  )
}

StatItem.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.any,
  color: PropTypes.string,
  labelText: PropTypes.string,
  bcg: PropTypes.string
}

export default StatItem
