/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Ananya Health Care
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                ananyahealthcare@gmail.com
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "} 
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
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
