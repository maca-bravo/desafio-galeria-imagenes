import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Footer = (props) => {
  return (
    <div>
        <Alert key="light" variant="light">
          {props.textfooter}
        </Alert>

    </div>
  )
}

export default Footer