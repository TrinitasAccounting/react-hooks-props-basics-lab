

import React from "react";


function Links(props) {
    return (
        <div>
            <h1>Links</h1>

            <a href={props.github}>{props.github}</a>

            <a href={props.linkedin}>{props.linkedin}</a>


        </div>
        // <a href="https://github.com/liza">asdf</a>
        // <div>
        // </div>
        // <a href={props.links}>
    );
}

export default Links;