import React from 'react';
import { reduxForm, Field } from 'redux-form';

import * as formUtils from '../formUtils';


const SignInForm = props => {
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
      {formUtils.renderAlert(errorMessage)}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};

export default reduxForm({
  form   : 'signInForm',
})(SignInForm);