import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SignupForm from './SignupForm';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user
    this.props.signupUser(formProps);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <SignupForm
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          errorMessage={this.props.errorMessage}
          />
      </div>
    );
  }
};


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
};

export default connect(mapStateToProps, actions)(Signup);