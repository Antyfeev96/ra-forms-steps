import moment from 'moment/min/moment-with-locales';
import React, { useState } from 'react'
import Form from '../Form/Form'
import List from '../List/List'

let ITEMS = [
  {
    timestamp: '20.07.2019',
    distance: '5'
  },
  {
    timestamp: '19.07.2019',
    distance: '10'
  },
  {
    timestamp: '18.07.2019',
    distance: '8.8'
  },
]

export default function Container() {
  const date = (date) => {
    moment.locale('ru');
    return moment(date, 'DD.MM.YYYY').format('L');
  };

  const [state, setState] = useState(ITEMS.sort((a, b) => date(a.timestamp) < date(b.timestamp) ? 1 : -1));

  const onAddItem = (e) => {
    e.preventDefault();
    const newDate = date(e.target.querySelector('#date').value);
    if (state.find(item => item.timestamp === newDate)) {
      setState(prev => {
        const newState = []
        prev.forEach(item => {
          if (item.timestamp === newDate) {
            item.distance = (+item.distance + +e.target.querySelector('#distance').value).toString();
            item = {
              timestamp: newDate,
              distance: item.distance,
            }
          }
          newState.push(item);
        })
        e.target.querySelector('#date').value = ''
        e.target.querySelector('#distance').value = ''
        return newState.sort((a, b) => date(a.timestamp) < date(b.timestamp) ? 1 : -1)
      })
    } else {
      setState(prev => {
        return [
          ...prev,
          {
            timestamp: newDate,
            distance: e.target.querySelector('#distance').value,
          }
         ].sort((a, b) => date(a.timestamp) < date(b.timestamp) ? 1 : -1)
      })
    }
  }

  const onDeleteItem = (e) => {
    const deletedItem = e.target.closest('.table__item').querySelector('.table__timestamp');
    const newState = state.filter((item) => item.timestamp !== deletedItem.textContent)
    setState(() => {
      return newState.sort((a, b) => date(a.timestamp) < date(b.timestamp) ? 1 : -1)
    })
  }

  return (
    <div className="container">
      <Form onAddItem={onAddItem} />
      <List items={state} onDeleteItem={onDeleteItem} />
    </div>
  )
}
