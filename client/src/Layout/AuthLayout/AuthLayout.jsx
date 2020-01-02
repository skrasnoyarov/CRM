// @flow
import Form from './Form';
import Header from './Header';
import React, {Component} from 'react';

class AuthLayout extends Component<{}>{

    renderContent () {
        const textProps = this.props;
        return (
            <>
                <Header/>
                <Form {...textProps}/>
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

export default AuthLayout;