import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
      <Link className={props.class} to={props.url}>{props.text}</Link>
    </div>
  )
}

export default Button
