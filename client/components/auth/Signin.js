import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SigninForm from './SigninForm';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    // need to do something to log user in
    this.props.signinUser({email, password});
  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <SigninForm
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          errorMessage={this.props.errorMessage}
          />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Signin);