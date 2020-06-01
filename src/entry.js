import React from 'react';
import ReactDOM from 'react-dom';
import './static/app.css'
import TodoList from "./view/TodoList";


export default class HelloReact extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <TodoList></TodoList>
            </div>
        );
    }
}

ReactDOM.render(<HelloReact />, document.getElementById('app'));