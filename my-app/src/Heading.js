
function Heading(props){
    let title = "Hello " + props.firstName

    return (
        <h1 style={{color:"tomato", fontSize: "40px", fontWeight:"bold"}}>{title}</h1>
        )
}

export default Heading;