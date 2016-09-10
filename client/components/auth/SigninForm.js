import React from 'react';
import { reduxForm, Field } from 'redux-form';

import * as formUtils from '../formUtils';


const SignInForm = props => {
  const {handleSubmit, handleFormSubmit, errorMessage} = props;
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field
          name="email"
          component={formUtils.renderInput}
          type="text"
          />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field
          name="password"
          component={formUtils.renderInput}
          type="password"
          />
      </fieldset>
      {formUtils.renderAlert(errorMessage)}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};

export default reduxForm({
  form   : 'signInForm',
})(SignInForm);