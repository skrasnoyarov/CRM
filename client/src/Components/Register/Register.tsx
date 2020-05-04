// @flow
import Alert from '@material-ui/lab/Alert';
import AuthLayout from "../../Layout/AuthLayout";
import Backdrop from '@material-ui/core/Backdrop';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Modal from '@material-ui/core/Modal';
import './Register.css';
import React, {Component} from 'react';
import {clearError, registeredUser} from '../../actions/Auth';

class Register extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        };
    }

    componentDidUpdate (prevProps) {
        const {error} = this.props;
        
        if (prevProps.error !== error) {
            this.setState({error})
        }
    }

    componentWillUnmount() {
      const {clearError} = this.props;
        clearError && clearError();
    }

    onSubmitHandler (value, page) {
        const {registeredUser} = this.props;
        registeredUser && registeredUser(value, page);
    }

    renderError () {
      const {error} = this.state;

      return error
        ? (
          <Alert severity="error">{error}</Alert>
          ) : null;
    }

    redirectToLoginPage = () => {
        window.location.href = '/login';
    };

    renderModal () {
        const {isRegistered} = this.props;

        return (
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={isRegistered}
                className={"userModal"}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
            <div className="userModal_content">
                <p>Акаунт создан!</p>
                <p>Чтобы продолжить, перейдите на форму авторизации</p>
                <button className="modal-action btn waves-effect" onClick={this.redirectToLoginPage}>Перейти</button>
            </div>
            </Modal>
      )
    }

    renderContent () {
        const props = {
            header: 'Создать аккаунт',
            valueButton: 'Создать',
            page: 'register',
            onSubmit: (value: any, page: string) => this.onSubmitHandler(value, page)
        };

        return (
            <>
                <AuthLayout {...props}/>
                {this.renderModal()}
                {this.renderError()}
            </>
        )
    }

    render () {
        return (
        <>
            {this.renderContent()}
        </>
        )
    }
}

const mapStateToProps = state => ({
    error: state.AuthReducer.errorMessage,
    isRegistered: state.AuthReducer.isRegistered
});

const mapDispatchToProps = dispatch => bindActionCreators({
    clearError,
    registeredUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);