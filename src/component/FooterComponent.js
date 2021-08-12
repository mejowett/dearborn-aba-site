import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Links</h3>
              <ul>
                <li>
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contactus">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a
                    role="button"
                    className="btn btn-link"
                    href="tel:+11-321-555-1234"
                  >
                    <i className="fa fa-phone" /> 1-321-555-1234
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    className="btn btn-link"
                    href="Dearbornaa@dearborn.co"
                  >
                    <i className="fa fa-envelope-o" /> Dearbornaa@dearborn.co
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Dearborn ABA</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="row">
              <div class="col item social">
                <a
                  className="btn btn-social-icon btn-instagram"
                  href="http://instagram.com/"
                >
                  <i className="fa fa-instagram" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/"
                >
                  <i className="fa fa-facebook" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
