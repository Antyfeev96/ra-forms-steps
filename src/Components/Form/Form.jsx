import React from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
  return (
    <form className="form">
      <div className="form__date">
        <div>Дата (ДД.ММ.ГГ)</div>
        <input type="text" />
      </div>
      <div className="form__distance">
        <div>Пройдено км</div>
        <input type="text" />
      </div>
      <input id="submit" type="submit" value="OK" />
    </form>
  )
}

Form.propTypes = {

}