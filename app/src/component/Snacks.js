const SnacksList = (props) => {
    const lowCaloriesSnacks = props.data.filter((desserts) => {
        return desserts.calories < 500;
    }).sort((a,b)=> {
        return a.calories - b.calories;
    }).map((desserts) => {
        return (
            <l1>
                {desserts.name} - {desserts.calories}cal {' '}
            </l1>
        );
    })
    return <ul>{lowCaloriesSnacks}</ul>
}

export default SnacksList;