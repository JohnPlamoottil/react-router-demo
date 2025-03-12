import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import AboutMe from "../AboutMe/AboutMe";
// Import the new components
import Contact from "../AboutMe/about-me-files/Contact";
import Hobbies from "../AboutMe/about-me-files/Hobbies";
import MyStory from "../AboutMe/about-me-files/MyStory";

import "./App.css";

function App() {
  // Add the child routes to the /about-me route.
  return (
    <div className="App">
      <Header />
      /* Wrap a Route component inside a Routes component and specify the path
      and element attributes as shown. */
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
