import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="myFooter">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 myCols">
                <h6>Get started</h6>
                <ul>
                  <li>
                    <Link to="/signup">Home</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/signup">Downloads</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h6>About us</h6>
                <ul>
                  <li>
                    <Link to="/signup">Company Information</Link>
                  </li>
                  <li>
                    <Link to="/signup">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/signup">Reviews</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h6>Support</h6>
                <ul>
                  <li>
                    <Link to="/signup">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/signup">Help desk</Link>
                  </li>
                  <li>
                    <Link to="/signup">Forums</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h6>Legal</h6>
                <ul>
                  <li>
                    <Link to="/signup">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/signup">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/signup">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-networks">
            <Link to="/" className="twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link to="/" className="facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/" className="google">
              <i className="fab fa-google-plus" />
            </Link>
          </div>
          <div className="footer-copyright">
            <p>© 2022 Copyright</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
