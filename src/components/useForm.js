import { useState } from 'react'

const useForm = (validation) => {
  //set up useState hook like object
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})

  //spread operator to copy values
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(values))
    console.log(values, 'hello')
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
