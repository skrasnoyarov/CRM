// @flow
import React, {Component} from 'react';
import AuthLayout from "../../Layout/AuthLayout";

class Login extends Component<{}> {
  render() {
      const textProps = {
          header: 'Войти в систему',
          valueButton: 'Войти'
      };

    return (
        <AuthLayout textProps={textProps}/>
    )
  }
}

export default Login;