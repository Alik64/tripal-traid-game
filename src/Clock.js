import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('time')
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {

        return (
            <div>
                The time is : {this.state.date}
            </div>
        )
    }

}
export default Clock