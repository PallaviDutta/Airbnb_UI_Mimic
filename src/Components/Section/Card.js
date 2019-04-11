import React from 'react';

const Card =(props) =>{
    return (<div>
        Name: {props.children} |
        Age:{props.age}
    </div>)
}

export default Card;