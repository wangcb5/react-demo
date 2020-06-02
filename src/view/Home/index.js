import React from 'react'

class Home extends React.Component{
    render() {
        return (
            <div>
                首页
                <input type="button" value={'GO TODOLIST'} onClick={() => this.props.history.push('TodoList/1')}/>
            </div>
        );
    }
}

export default Home