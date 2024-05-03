import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Servies from "../Services/Servies";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Servies></Servies>
            <Products></Products>   
        </div>
    );
};

export default Home;