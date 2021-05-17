import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem(props) {
  const { item } = props;
  return (
    <div className="table__item">
      <div>{item.timestamp}</div>
      <div>{item.distance}</div>
      <div>{item.delete}</div>
    </div>
  )
}

ListItem.propTypes = {

}