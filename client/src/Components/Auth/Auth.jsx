// @flow
import AuthLayout from "../../Layout/AuthLayout";
import React, {Component} from 'react';

class Auth extends Component<{}> {
    renderContent () {
        const textProps = {
            header: 'Создать аккаунт',
            valueButton: 'Создать'
        };

        return (
            <AuthLayout textProps={textProps}/>
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

export default Auth;