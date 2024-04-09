import React from "react";
function Fruits(props) {

    // const [fruits] = React.useState([
    //     { fruitName: 'mango', id: 1},
    //     { fruitName: 'cashew', id: 2},
    //     { fruitName: 'watermelon', id: 3},
    //     { fruitName: 'pawpaw', id: 4}
    // ]);

    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    );
}

export default Fruits;