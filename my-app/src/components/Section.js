import Promo1 from "./Promo1";

function Section(props) {
  return (
    <div>
        
      <Promo1 heading="You have 20% discount" />
      <h2>
        The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
      </h2>
      <p>
        The value of the math prop is: <em>{props.math}</em>
      </p>
      <p>
        The value of the str prop is: <em>{props.str}</em>
      </p>

        

    </div>
  );
}

export default Section;
