import React from 'react';
import {HashRouter, Route, Switch, hashHistory, Redirect} from 'react-router-dom';
import routerHandler from "./routers";
import baseMenu from '../api/baseMenu'
import { Provider} from 'mobx-react'
import appStore from '../store'
const stores = appStore;

class BasicRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            routers: []
        }
    }

    componentDidMount() {
        baseMenu.getMenu({}, (data) => {
            if (data.data) {
                this.setState({
                    routers: routerHandler(data.data)
                })
            }
        });
    }

    render() {
        return (
            <Provider {...stores}>
                <HashRouter history={hashHistory}>
                    <Switch>
                        {this.state.routers}
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }

}

export default BasicRoute