// @flow
import Alert from '@material-ui/lab/Alert';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from 'react-redux';
import {authorizeUser, clearError} from "../../actions/Auth";
import React, {Component} from 'react';
import AuthLayout from "../../Layout/AuthLayout";

class Login extends Component<{authorizeUser: any, error: string, clearError: any}> {
      constructor(props: any) {
        super(props);

        this.state = {
            error: ''
        };
    }

      componentDidUpdate (prevProps: any) {
        const {error} = this.props;

        if (prevProps.error !== error) {
            this.setState({error})
        }
    }

    componentWillUnmount() {
      const {clearError} = this.props;
        clearError && clearError();
    }

    handleSubmitButton (value: any, page: string) {
        const {authorizeUser} = this.props;
        authorizeUser && authorizeUser(value, page);
    };

    renderError () {
      const {error} = this.state;

      return error
        ? (
          <Alert severity="error">{error}</Alert>
          ) : null;
    }

  render() {
    const props = {
      header: 'Войти в систему',
      valueButton: 'Войти',
      page: 'login',
      onSubmit: (value: Object, page: string) => this.handleSubmitButton(value, page)
    };

    return (
      <>
        <AuthLayout {...props}/>
        {this.renderError()}
        </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  error: state.AuthReducer.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    authorizeUser,
    clearError
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);