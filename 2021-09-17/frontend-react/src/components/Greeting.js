import React from "react"

const Greeting = ({name, age}) => {
    //const { name } = props

    return (
        <>
            <h1>Greeting {name}</h1>
            <p>Greeting text {age}</p>
        </>
    )
}

//const Greeting = () => <h1>Greeting</h1>

export default Greeting