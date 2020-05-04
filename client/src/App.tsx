import AddCategory from './Components/AddCategory';
import Analytics from './Components/Analytics';
import {autoLogin} from './actions/Auth';
import {bindActionCreators, Dispatch} from 'redux';
import Categories from './Components/Categories';
import {connect} from 'react-redux';
import History from './Components/History';
import Login from './Components/Login';
import Order from './Components/Order';
import Overview from './Components/Overview';
import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import Register from './Components/Register';
import Menu from "./Components/Menu";

class App extends Component<{autoLogin: any, token: string}> {
    componentDidMount() {
        const {autoLogin} = this.props;
        autoLogin && autoLogin();
    }

    renderRoute() {
        const {token} = this.props;
        const redirectPage = localStorage.getItem('page') || '/overview';

        if (!token) {
           return <>
               <Route  path ="/register" component={Register} />
               <Route excat path="/login" component={Login} />
               <Redirect to="/login" />
           </>
        }

        return <>
                <Menu />
                <Route excat path="/overview" component={Overview} />
                <Route path="/categories" component={Categories} />
                <Route path="/addCategory" component={AddCategory} />
                <Route path="/category/:id" component={AddCategory} />
                <Route path="/analytics" component={Analytics} />
                <Route path="/history" component={History} />
                <Route path="/order" component={Order} />
                <Redirect to={redirectPage} />
            </>
    }


    render() {
        return (
            <>
                {this.renderRoute()}
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    token: state.AuthReducer.token
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    autoLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
