// import logo from "../";// import logo from "./logo.svg";

//ES6

const Aside = (props) => {
//   const url = "../logo.svg";
  return (
    <div>
      {/* <img src={url} alt="logo" /> */}
      <h1>{props.name} Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        cupiditate libero voluptate quia? Facere dolores recusandae repellat
        perspiciatis consequuntur atque, quam itaque, ea non nulla ullam,
        deleniti eos quo soluta?
      </p>
    </div>
  );
};

export default Aside;
