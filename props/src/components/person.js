import React, {useState} from 'react'


const Person = (props) =>{
    const [inStock, setInStock ]= useState(props.intialstock);
    const [birthday, setBirthday] = useState(props.birthday)

    return (
        <div>
            <h2>{props.lastname}, {props.firstname}</h2>
            <p>age : { birthday }</p>
            <p>Hair Color: {props.hair}</p>
            <p> in stock: { inStock }</p>
            <button onClick={ (event)=> setInStock(inStock- 1)}>BUY {props.firstname}'s Merch </button>
            <button onClick={(event) => setBirthday(birthday + 1)}>Birthday button for {props.firstname}</button>
        </div>
    )
}

export default Person; 