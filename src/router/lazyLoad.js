import React from 'react'

function lazyLoad(componentfn,enterHandler=function () {},leaveHandler=function () {}) {
    class LazyloadComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }
        async componentWillMount() {
            enterHandler();
            const {default: component} = await componentfn();
            this.setState({component})
        }


        componentWillUnmount() {
            leaveHandler()
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
    return LazyloadComponent;
}

export default lazyLoad