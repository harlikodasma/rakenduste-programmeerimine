import React from "react";

function Lesson({ which, lesson }) {

    return (
        <>
            <h2>Lesson { which }</h2>
            { lesson }
        </>
    )
}

export default Lesson