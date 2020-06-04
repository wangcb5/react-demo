import React from 'react';
import {HashRouter, Route, Switch, hashHistory, Redirect} from 'react-router-dom';
import NotFound from '../view/NotFound'
// import Home from '../view/Home'
// import TodoList from '../view/TodoList'
// import News from '../view/Home/News'

import { configure } from "mobx"
import { Provider} from 'mobx-react'

import appStore from '../store'

const stores = appStore;


// configure({enforceActions: true});


function lazyLoad(componentfn) {
    class LazyloadComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }
        async componentWillMount() {
            const {default: component} = await componentfn();
            this.setState({component})
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
    return LazyloadComponent;
}

const Home = lazyLoad(() => import('../view/Home'));
const TodoList = lazyLoad(() => import('../view/TodoList'));
const News = lazyLoad(() => import('../view/Home/News'));
const Culture = lazyLoad(() => import('../view/Home/Culture'));
const Entertainment = lazyLoad(() => import('../view/Home/Entertainment'));


const BasicRoute = () => {
    return (
        <Provider {...stores}>
            <HashRouter history={hashHistory}>
                <Switch>
                    <Route exact path="/" render={()=> (
                        <Redirect to='/Home'/>
                    )}/>
                    <Route path="/Home" render={(props)=>
                        <Home {...props}>
                            <Route exact path="/Home/News" component={News}/>
                            <Route exact path="/Home/Entertainment" component={Entertainment}/>
                            <Route exact path="/Home/Culture" component={Culture}/>
                            <Redirect to='/Home/News'/>
                        </Home>
                    }/>
                    <Route exact path="/TodoList/:id" component={TodoList}/>
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </HashRouter>
         </Provider>
    )
};

export default BasicRoute