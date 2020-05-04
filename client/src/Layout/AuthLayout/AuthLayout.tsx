import Header from './Header';
import Form from './Form';
import React, {Component} from 'react';
import {Props} from './type';

class AuthLayout extends Component<Props> {

    onSubmitHandler = (value: any) => {
        const {onSubmit, page} = this.props;
        onSubmit && onSubmit(value, page);
    };

    renderContent () {
        const {header, valueButton} = this.props;
        return (
            <>
                <Header/>
                <Form header={header} valueButton={valueButton} onSubmit={this.onSubmitHandler}/>
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