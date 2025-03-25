import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import Review from "../Review/Review";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import AboutMe from "../AboutMe/AboutMe";
// Import the new components
import Contact from "../AboutMe/about-me-files/Contact";
import Hobbies from "../AboutMe/about-me-files/Hobbies";
import MyStory from "../AboutMe/about-me-files/MyStory";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";
import PageNotFound from "../PageNotFound/PageNotFound";

import "./App.css";

function App() {
  // Add the child routes to the /about-me route.
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch the review data from the server.
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pass the parsed response body to the setter function.
        setReviews(data);
      })
      .catch(console.error);
    // An empty dependency array means the hook only runs when
    // component launches.
  }, []);

  return (
    <div className="App">
      <Header />
      /* Wrap a Route component inside a Routes component and specify the path
      and element attributes as shown. */
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Pass reviews as a prop to the Reviews component. */}
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/ :reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />}>
          <Route path="history" element={<SiteHistory />} />
          <Route path="mission" element={<SiteMission />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
