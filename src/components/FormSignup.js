import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useForm from './useForm'
import validation from './validation'

function FormSignup() {
  const { handleChange, values, handleSubmit, errors } = useForm(validation)
  return (
    <div className="container">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <Form onSubmit={handleSubmit}>
          <h1> User sign up form</h1>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p style={{ color: 'red' }}>{errors.username}</p>
            )}
          </Form.Group>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </Form.Group>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: 'red' }}>{errors.password}</p>
            )}
          </Form.Group>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
            )}
          </Form.Group>
          <div className="d-grid gap-2">
            <Button className="btn btn-block mt-2" size="lg" type="submit">
              Submit form
            </Button>
            <span className="form-input-login">
              Already have an account? Login <a href="#">here </a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default FormSignup
