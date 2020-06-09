import React from 'react'
import '../../static/home'
import { NavLink} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
@inject('store') @observer
class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                首页
                <input type="button" value={'GO TODOLIST'} onClick={() => this.props.history.push({pathname:'/TodoList/1', state: {
                    num: 222
                    }})}/>
                <input type="button" value={'GO Menu'} onClick={() => this.props.history.push({pathname:'/Menu'})}/>
                <div className={'btnList'}>
                    <NavLink
                        exact
                        to="/Home/News"
                        activeClassName="selected"
                    >新闻</NavLink>
                    <NavLink
                        exact
                        to="/Home/Entertainment"
                        activeClassName="selected"
                    >娱乐</NavLink>
                    <NavLink
                        exact
                        to="/Home/Culture"
                        activeClassName="selected"
                    >文化</NavLink>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Home