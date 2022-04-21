import React, { useEffect, useState } from "react";



const Clock = () => {
    console.log('render')
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    let name = 'Al'
    console.log('name', name)


    useEffect(() => {
        console.log('componentDidMount')

        const interval = setInterval(() => {
            console.log('time')
            name = Date.now()
            console.log('setInterval name', name)
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            console.log('componentWillUnmount')

            clearInterval(interval)
        }

    }, [])



    return (
        <div>The time is : {date}</div>
    )
}
export default Clock