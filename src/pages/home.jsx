import Developers from "./components/Developers";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Globe from "./components/Globe";
import Header from "./components/Header";
import Payments from "./components/Payments";
import WhyStripe from "./components/WhyStripe";

const Home = () => {
  return (
    <div>
      <Header />
      <Payments />
      <Developers />
      <WhyStripe />
      <Globe />
      <GetStarted />
      <Footer />
    </div>
  );
};
export default Home;
