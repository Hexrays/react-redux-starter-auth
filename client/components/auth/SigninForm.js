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
}

// This should be extracted as it's used in Signup form as well
const renderInput = field => (   // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type} className="form-control"/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
)

const SignInForm = props => {
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
          type="text"
          />
      </fieldset>
      {renderAlert(errorMessage)}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};

export default reduxForm({
  form   : 'signInForm',
})(SignInForm);