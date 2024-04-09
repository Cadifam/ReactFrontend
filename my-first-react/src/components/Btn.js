// function Btn() {
//     const clickhandler = () => console.log('you have clicked the button');
//     return (
//         <button onClick={clickhandler}>
//             Click me
//         </button>
//     );
// }

function Btn() {
    const clickhandler = () => console.log('mouse over');
    return (
        <button onMouseOver={clickhandler}>
            Click me
        </button>
    
    );
}

 export default Btn;