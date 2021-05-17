import { useState } from 'react';
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'
import ListTitle from '../ListTitle/ListTitle';
import ListItems from '../ListItems/ListItems';

const ITEMS = [
  {
    timestamp: '20.07.2019',
    distance: '5',
    delete: '✘'
  },
  {
    timestamp: '19.07.2019',
    distance: '10',
    delete: '✘'
  },
  {
    timestamp: '18.07.2019',
    distance: '8.8',
    delete: '✘'
  },
]

export default function List(props) {
  const [state, setstate] = useState(ITEMS);

  return (
    <div className="table">
      <ListTitle />
      <ListItems />
    </div>
  )
}

List.propTypes = {

}