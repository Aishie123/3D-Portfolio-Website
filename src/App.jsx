import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Wrapper div for full-page star effect */}
      <div className='relative z-0 bg-primary'>
        
        {/* Stars Background Layer */}
        <StarsCanvas />

        {/* Main Content */}
        <div className='relative z-10'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Experience />
          <Works />
          {/* <Feedbacks /> */}
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
