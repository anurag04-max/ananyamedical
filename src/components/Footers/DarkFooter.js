/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" id="about-section">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                target="_blank"
              >
                Ananya Health Care
              </a>
            </li>
            <li>
              <a
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="mailto:ananyamedicalagency@gmail.com"
                target="_blank"
              >
                ananymedicalagency@gmail.com
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "} 
          <a
            target="_blank"
          >
            Anurag Ojha & Amit Dhakite
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
