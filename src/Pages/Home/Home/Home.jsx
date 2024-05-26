import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";


export default function Home() {
    return (
        <div>
            <Helmet>
                <title>homepage</title>
            </Helmet>
            <div>
               <Hero /> 
            </div>
        </div>
        );
}