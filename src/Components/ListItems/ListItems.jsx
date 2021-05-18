import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem';

export default function ListItems(props) {
  const { items, onDeleteItem } = props;
  return (
    <div>
      <div className="table__items">
        {items.map((item, index) => <ListItem key={index} item={item} onDeleteItem={onDeleteItem} />)}
      </div>
    </div>
  )
}

ListItems.propTypes = {
  items: PropTypes.array
}
