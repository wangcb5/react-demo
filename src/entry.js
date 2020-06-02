import React from 'react';
import ReactDOM from 'react-dom';
import './static/app.css'
import Router from './router'


// export default class HelloReact extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//
//     render(){
//         return(
//             <div>
//                 <TodoList></TodoList>
//             </div>
//         );
//     }
// }

ReactDOM.render(<Router />, document.getElementById('app'));