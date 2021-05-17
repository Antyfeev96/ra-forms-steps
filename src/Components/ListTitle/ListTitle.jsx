import React from 'react'
import PropTypes from 'prop-types'

function ListTitle(props) {
  return (
    <div>
      <div className="table__title">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
    </div>
  )
}

ListTitle.propTypes = {

}

export default ListTitle

