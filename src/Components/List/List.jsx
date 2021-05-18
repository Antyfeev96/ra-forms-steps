import PropTypes from 'prop-types'
import ListTitle from '../ListTitle/ListTitle';
import ListItems from '../ListItems/ListItems';

export default function List(props) {
  const { items, onDeleteItem } = props;
  return (
    <div className="table">
      <ListTitle />
      <ListItems items={items} onDeleteItem={onDeleteItem} />
    </div>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.string,
    distance: PropTypes.string
  })),
  onDeleteItem: PropTypes.func
}