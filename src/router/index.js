import React from 'react';
import {HashRouter, Route, Switch, hashHistory, Redirect} from 'react-router-dom';
import routerHandler from "./routers";
import baseMenu from '../api/baseMenu'
import routesJson from '../routesJson.json'
import { configure } from "mobx";
import { observer, Provider} from 'mobx-react'
import store from '../store'
configure({ enforceActions: "observed"});

@observer
class BasicRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            routers: []
        }
    }

    componentDidMount() {
        store.menuStore.setRoutes(routesJson);
         this.setState({
             routers: routerHandler(routesJson)
         });
        baseMenu.getMenu({}, (data) => {
            if (data.data) {
                store.menuStore.setMenu(data.data)
            }
        })
    }

    render() {
        return (
            <Provider  store={store}>
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