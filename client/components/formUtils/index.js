import React from 'react';

export const renderAlert = (errorMessage) => {
  if(errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> {errorMessage}
      </div>
    );
  }
}

// This should be extracted as it's used in Signup form as well
export const renderInput = field => (   // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type} className="form-control"/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
)

export const  checkEmail = (emailAddress) => {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(emailAddress);
}