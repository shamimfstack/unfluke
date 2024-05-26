import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>homepage</title>
            </Helmet>
            <div>
                <div>
                    <div className="hero-content">
                        <h1>One stop solution to test your Strategy ideas</h1>
                        <p>As we are launching a Beta soon, we are giving away 1 month FREE subscription to our early backers. Sign up below to get FREE subscription.</p>
                        <button>Sign Up</button>
                        <p><span>Free 30-day subscription</span><span>Free 30-day subscription</span></p>
                    </div>
                    <div className="hero-image"></div>
                </div>
            </div>
        </div>
        );
}