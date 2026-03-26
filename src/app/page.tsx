import Header from "@/src/components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Steps from "../components/steps";
import Feedback from "../components/feedback";
import Reviews from "../components/reviews";
import Location from "../components/location";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Steps />
      {/* <Feedback/> */}
      <Reviews />
      <Location />
      <Footer/>
    </div>
  );
}