import React from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem';

export default function ListItems(props) {
  const { items, onDeleteItem } = props;
  return (
    <div>
      <div className="table__items">
        {items.map((item) => <ListItem key={nanoid()} item={item} onDeleteItem={onDeleteItem} />)}
      </div>
    </div>
  )
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.string,
    distance: PropTypes.string
  })),
  onDeleteItem: PropTypes.func
}
