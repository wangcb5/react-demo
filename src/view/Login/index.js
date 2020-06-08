import React from 'react'

class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="username">username:</label>
                    <input type="text" name="username"/>
                    <label htmlFor="password">password:</label>
                    <input type="text" name="password"/>
                    <input type="button" value="Submit"  />
                </form>
            </div>
        )
    }
}

export default Login