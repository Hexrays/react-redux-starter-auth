import React from 'react';
import { reduxForm, Field } from 'redux-form';

import * as formUtils from '../formUtils';

const SignupForm = props => {
  const {handleSubmit, handleFormSubmit, errorMessage} = props;
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field
        placeholder="Email"
        name="email"
        component={formUtils.renderInput}
        type="text"
        />
      <Field
        placeholder="Password"
        name="password"
        component={formUtils.renderInput}
        type="password"
        />
      <Field
        placeholder="Confirm Password"
        name="passwordConfirm"
        component={formUtils.renderInput}
        type="password"
        />
      {formUtils.renderAlert(errorMessage)}
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
  } else if (!formUtils.checkEmail(formProps.email)) {
    errors.email = 'Please enter a valid email address'
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