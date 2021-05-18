import React from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
  const { onAddItem } = props;

  return (
    <form className="form" onSubmit={(e) => onAddItem(e)}>
      <div className="form__date">
        <div>Дата (ДД.ММ.ГГ)</div>
        <input id="date" name="date" type="text" />
      </div>
      <div className="form__distance">
        <div>Пройдено км</div>
        <input id="distance" name="distance" type="text" />
      </div>
      <input id="submit" type="submit" value="OK"/>
    </form>
  )
}

Form.propTypes = {
  onAddItem: PropTypes.func
}