import React from 'react';
import { reduxForm, Field } from 'redux-form';

function renderAlert(errorMessage) {
  if(errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> {errorMessage}
      </div>
    );
  }
};

// This should be extracted as it's used in Signin form as well
const renderInput = field => (   // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type} className="form-control"/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
);

const SignupForm = props => {
  const {handleSubmit, handleFormSubmit, errorMessage} = props;
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field
          name="email"
          component={renderInput}
          type="text"
          />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field
          name="password"
          component={renderInput}
          type="password"
          />
      </fieldset>
      <fieldset className="form-group">
        <label>Confirm Password:</label>
        <Field
          name="passwordConfirm"
          component={renderInput}
          type="password"
          />
      </fieldset>
      {renderAlert(errorMessage)}
      <button action="submit" className="btn btn-primary">Sign up</button>
    </form>
  );
};

function validate(formProps) {
  const errors = {};

  // The first three can be optimized with a forEach or Map
  // add email validation
  // server send confirmation email
  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}


export default reduxForm({
  form   : 'signupForm',
  validate
})(SignupForm);