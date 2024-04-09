import PromoHeading from "./PromoHeading";

function Promo() {
    const data = {
        heading: "50% off all items",
        callToAction: "Everything must go",
    };

    return (
        <div className="promo-section>">
            <div>
                <PromoHeading heading={data.heading} callToAction={data.callToAction} />
            </div>

            <div>
                <h1> Do not miss this deal!</h1>
            </div>
            <h2> Subscribe to my newsletter and get all the shop items at 50% off</h2>
        </div>

    );
}

export default Promo;