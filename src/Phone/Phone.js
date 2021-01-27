import React from 'react';

export default props => (
    <div className='phone-container'>
        <h3>Phone name: {props.name}</h3>
        <p><strong>Memory: </strong>{props.memory}</p>
        <p><strong>Color: </strong>{props.color}</p>
        <p><strong>Matrix: </strong>{props.matrix}</p>
    </div>
    
)


// function Phone() {
//         return (
//             <div>
//                 <h3>Phone component</h3>
//             </div>
//         )
// }

// const Phone = () => {
//     return (
//         <div>Phone component</div>
//     )
// }

// const Phone = () => <div>Phone component</div>


