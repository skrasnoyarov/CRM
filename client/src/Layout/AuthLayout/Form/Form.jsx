// @flow
import React from 'react';

function Form (props: Object) {
    const {textProps} = props;
    const {header, valueButton} = textProps;

    return (
        <div className="auth-block">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{header}</span>
                    <div className="input-field">
                        <input id="email" type="email" required/>
                            <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" required/>
                            <label htmlFor="password">Пароль:</label>
                    </div>
                </div>
                <div className="card-action">
                    <button className="modal-action btn waves-effect">{valueButton}</button>
                </div>
            </div>
        </div>
    )
}

export default Form;