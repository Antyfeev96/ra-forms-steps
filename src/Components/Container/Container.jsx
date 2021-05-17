import React from 'react'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import List from '../List/List'

export default function Container(props) {
  return (
    <div className="container">
      <Form />
      <List />
    </div>
  )
}

Container.propTypes = {

}
