import React from 'react';
import {HashRouter, Route, Switch, hashHistory, Redirect} from 'react-router-dom';
import Home from "../view/Home";
import TodoList from '../view/TodoList';
import NotFound from '../view/NotFound'

const BasicRoute = () => {
    return (
        <HashRouter history={hashHistory}>
            <Switch>
                <Route exact path="/" render={()=> (
                    <Redirect to='/home'/>
                )}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/TodoList/:id" component={TodoList}/>
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </HashRouter>
    )
};

export default BasicRoute