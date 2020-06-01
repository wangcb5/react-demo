import React from 'react'

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: '',
        }
    }


    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name] : value,
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.handleChange.bind(this)}
                    />
                {this.props.submitBtn}
            </form>
        );
    }
}