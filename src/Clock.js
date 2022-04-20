import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor')

        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }
    // shouldComponentUpdate( nextProps, nextState, nextContext) {}
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log('old state', this.state)
        // console.log('new state', nextState)
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            console.log('time')
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000)
        console.log('componentDidMount')

    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log('componentWillUnmount')

    }
    render() {
        console.log('render')

        return (
            <div>
                The time is : {this.state.date}
            </div>
        )
    }

}
export default Clock