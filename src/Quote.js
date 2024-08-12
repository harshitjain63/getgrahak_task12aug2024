import React from "react"

function Quote(props) {
    return (

        <div>
      {props.person.permission ? (
        <p>{props.person.quote}</p>
      ) : (
        <p>No quote for today .</p>
      )}
        </div>
    );

}


export default Quote;
