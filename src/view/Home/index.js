import React from 'react'
import '../../static/home'
import { NavLink} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

class Home extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        // const {add, number} = this.props.appStore;
        // console.log(add, number)
        return (
            <div>
                首页
                <input type="button" value={'GO TODOLIST'} onClick={() => this.props.history.push({pathname:'/TodoList/1', state: {
                    num: 222
                    }})}/>
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