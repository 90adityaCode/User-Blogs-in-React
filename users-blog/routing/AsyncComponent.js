import React, { Component } from "react";


export default function asyncComponent(getComponent) {
    console.log('getComponent', getComponent);
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };
        componentWillMount() {
       
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            console.log('this.state', this.state);
            const { Component } = this.state
            console.log('Component', Component)
            if (Component) {
                console.log('Component',Component)
                return <Component {...this.props} />
            }
            return null
        }
    }
    return AsyncComponent;
}
