import React, {useState} from "react";

function BotCheck({correct}) {
    const [input, setInput] = useState("puudub")

    return (
        <>
            <h3>Kirjuta '{correct}'</h3>
            <input
                type="text"
                onChange={event => setInput(event.target.value)}/><br/>
            {correct == input ?
                <div>Korrektne!</div>
                :
                <div>Pole veel päris õige...</div>}
        </>
    )
}

export default BotCheck