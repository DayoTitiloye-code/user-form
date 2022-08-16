const validation = (values) => {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = 'Username is required'
  }

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = 'Email given is not valid'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 4) {
    errors.password =
      'Password is too short (needs to at least be 4 characters)'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password do not match'
  }

  return errors
}

export default validation
