// @flow
import cn from 'classnames';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Props, State} from './type';

class Form extends Component<Props, State> {
    static defaultProps = {
        header: 'Просто заголовок',
        valueButton: 'Просто кнопка'
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            validMail: true,
            validPassword: true
        }
    }

    handleSubmit = (event: React.ChangeEvent) => {
        const {email, password} = this.state;
        const {onSubmit} = this.props;

        event.preventDefault();

        if (!email.trim() && !password.trim()) {
            this.setState({validMail : false, validPassword: false})
        } else if (!email.trim()) {
            this.setState({validMail : false})
        } else if (!password.trim()) {
            this.setState({validPassword: false})
        } else {
            onSubmit && onSubmit({email, password})
        }


    };

    onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;

        if (!value) {
            this.setState({validMail : false})
        } else {
            this.setState({email: value, validMail: true})
        }
    };

    onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;

        if (!value) {
            this.setState({validPassword : false})
        } else {
            this.setState({password: value, validPassword: true})
        }
    };

    renderErrorMail () {
        const {validMail} = this.state;
        return !validMail ? <span className="helper-text red-text">Введите почту</span> : null;
    }

    renderErrorPassword () {
        const {validPassword} = this.state;
        return !validPassword ? <span className="helper-text red-text">Введите пароль</span> : null;
    }


    renderForm () {
        const {validMail, validPassword} = this.state;
        const {canAuth, header, valueButton} = this.props;

        const styleMail = cn({
            "invalid": !validMail
        });

        const stylePassword = cn({
            "invalid": !validPassword
        });

        return (
            <form className="auth-block" onSubmit={this.handleSubmit}>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{header}</span>
                        <div className="input-field">
                            <input id="email" type="email" className={styleMail} onChange={this.onChangeEmail} />
                            <label htmlFor="email">Email:</label>
                            {this.renderErrorMail()}
                        </div>
                        <div className="input-field">
                            <input id="password" type="password" className={stylePassword} onChange={this.onChangePassword} />
                            <label htmlFor="password">Пароль:</label>
                            {this.renderErrorPassword()}
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="modal-action btn waves-effect" disabled={!canAuth || !validMail || !validPassword}>{valueButton}</button>
                    </div>
                </div>
            </form>
        )
    }

    render () {
        return (
            <>
                {this.renderForm()}
            </>
        )
    }
}

const mapStateToProps = (state: any) => ({
    canAuth: state.AuthReducer.canAuth
});

export default connect(mapStateToProps, null)(Form);