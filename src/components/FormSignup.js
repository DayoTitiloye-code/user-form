import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function FormSignup() {
  return (
    <div className="container">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <Form>
          <h1> User sign up form</h1>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </Form.Group>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          {/* used as a divider between inputs*/}
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button className="btn btn-block mt-2" size="lg">
              Submit form
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default FormSignup
