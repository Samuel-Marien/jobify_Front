import React from 'react'
import PropTypes from 'prop-types'

const FormRowSelect = ({ labelText, name, value, onChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor="jobType" className="form-label">
        {labelText || name}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          )
        })}
      </select>
    </div>
  )
}

FormRowSelect.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  list: PropTypes.array
}

export default FormRowSelect
