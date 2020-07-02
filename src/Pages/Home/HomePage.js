import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
            <ul>
              <li>
                <a href="#">Windows</a>
              </li>
              <li>
                <a href="#">Linux</a>
                <ul>
                  <li>
                    <a href="#">Web Server</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Android</a>
                <ul>
                  <li>
                    <a href="#">Messenger</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">IOS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Articles</a>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">User Experience</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Inspiration</a>
          </li>
        </ul>
      </nav>

      <div class="welcome">The Band Name</div>
    </div>
  );
}
export default HomePage;
