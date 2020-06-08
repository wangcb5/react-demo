import React from 'react';
import {HashRouter, Route, Switch, hashHistory, Redirect} from 'react-router-dom';
import lazyLoad from "./lazyLoad";

let routerHandler = (data) => {
    if (data && data instanceof Array) {
        return data.map((item, index) => {
            if (item.redirect) {
                return (<Route key={index} exact path={item.path} render={()=> (
                    <Redirect to={item.redirect}/>
                )}/>)
            } else {
                //假数据token
                let token = 1;
                if (item.children && item.children instanceof Array) {
                    return (<Route key={index} path={item.path} render={props =>{
                        const RouteItem = lazyLoad(() => import('../view/' + item.component));
                        return (!item.auth ? (<RouteItem {...props} >
                                {item.children ? routerHandler(item.children) : ''}
                            </RouteItem>) : (token ? <RouteItem {...props} >  {item.children ? routerHandler(item.children) : ''}</RouteItem> : <Redirect to={'/login'}/>)
                        )
                    }}/>)

                } else {
                    let cpmt = lazyLoad(() => import('../view/' + item.component));
                    return (!item.auth ? <Route key={index} path={item.path} exact component={cpmt}></Route> : token ? <Route key={index} path={item.path} exact component={cpmt}></Route> : <Redirect to={'/Login'}/>)
                }
            }
        })
    }else {
        return ''
    }
};

export default routerHandler