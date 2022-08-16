import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSucess from './FormSucess'
function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }
  return (
    <div>
      {/*ternary operator to change state once form is submitted */}
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSucess />}
    </div>
  )
}

export default Form
