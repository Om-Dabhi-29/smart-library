import Hero from "./Hero";
import Features from "./Features";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import BookSection from "../../components/books/BookSection";


function Home() {
  return (
    <>
      <Hero />
        <Features />
         <Statistics />
          <BookSection />
           <Testimonials />
    </>
  );
}

export default Home;