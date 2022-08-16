import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function FormSucess() {
  return (
    <div className="container">
      <h3 className="col-10 mx-auto col-md-8 mt-5 p-2">
        You have successfully created an account!
        <FontAwesomeIcon icon={faCheck} />
      </h3>
    </div>
  )
}

export default FormSucess
