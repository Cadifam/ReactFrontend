function PromoHeading(props){
    return (
        
        <div className="promo-section">
            <h1>{props.heading}</h1>
            <h2>{props.callToAction}</h2>
        </div>
    );
}


export default PromoHeading;