import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Form from '../Form/Form'
import List from '../List/List'

const russianDate = (input) => {
  const data = input.split('.')
  const russianData = new Date(data[2], data[1] - 1, data[0]);
  return russianData;
};

const convertToRussianString = (data) => {
  const day = data.getDate().toString().length === 1 ? `0${data.getDate()}` : data.getDate();
  const month = data.getMonth().toString().length === 1 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
  return `${day}.${(month).toString()}.${data.getFullYear()}`
}

let ITEMS = [
  {
    key: nanoid(5),
    timestamp: '20.07.2019',
    distance: '5'
  },
  {
    key: nanoid(5),
    timestamp: '08.12.1996',
    distance: '10'
  },
  {
    key: nanoid(5),
    timestamp: '18.07.2019',
    distance: '8.8'
  },
];

export default function Container() {

  const [state, setState] = useState(ITEMS.sort((a, b) => russianDate(a.timestamp) < russianDate(b.timestamp) ? 1 : -1));
  const [form, setForm] = useState({
    timestamp: '',
    distance: ''
  })

  const handleTimestamp = (event) => {
    const { value } = event.target;
    setForm( prev => ({ ...prev, timestamp: value }));
  }

  const handleDistance = (event) => {
    const { value } = event.target;
    setForm( prev => ({ ...prev, distance: value }));
  }

  const onAddItem = (e) => {
    e.preventDefault();
    const ruDate = russianDate(form.timestamp);
    const { distance } = form;
    const endDate = convertToRussianString(ruDate);
    if (state.find(item => item.timestamp === endDate)) {
      setState(prev => {
        const newState = [];
        prev.forEach(item => {
          if (item.timestamp === endDate) {
            const newDistance = (+item.distance + +distance).toString();
            item = {
              key: nanoid(5),
              timestamp: endDate,
              distance: newDistance,
            }
          }
          newState.push(item);
        })
        return newState.sort((a, b) => russianDate(a.timestamp) < russianDate(b.timestamp) ? 1 : -1);
      })
    } else {
      setState(prev => {
        return [
          ...prev,
          {
            key: nanoid(5),
            timestamp: endDate,
            distance,
          }
         ].sort((a, b) => russianDate(a.timestamp) < russianDate(b.timestamp) ? 1 : -1)
      })
    }
  }

  return (
    <div className="container">
      <Form setForm={setForm} onAddItem={onAddItem} handleTimestamp={handleTimestamp} handleDistance={handleDistance} />
      <List items={state} setState={setState} />
    </div>
  )
}
