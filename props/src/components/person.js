import React from 'react'


const Person = (props) =>{
    return (
        <div>
            <h2>{props.lastname}, {props.firstname}</h2>
            <p>age : {props.age}</p>
            <p>Hair Color: {props.hair}</p>
        </div>
    )
}

export default Person; 