import "./AboutUs.css";
import { Outlet, Link } from "react-router-dom"; // New import

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="about-us">
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
