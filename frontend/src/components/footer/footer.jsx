import React from "react"
import logoSmall from "../../assets/logosmall.png"
import "./footer.css"

const Footer = () =>
  <footer className="page-footer font-small pt-4 gradient-custom-2 text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0">
              <img src={logoSmall} alt="logo" className="logo-small mb-2" />
              <ul className="list-unstyled">
                <li>Grön Market SRL</li>
                <li>123 Unknown Street, New City</li>
                <li>Imagineland</li>
            </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3 mt-2">
                <h5 className="text-uppercase text-dark mb-4">Help</h5>
                <ul className="list-unstyled mt-2">
                    <li><a href="/shipping" className="text-white text-decoration-none">Shipping</a></li>
                    <li><a href="/payments" className="text-white text-decoration-none">Payment options</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mt-2">
                <h5 className="text-uppercase text-dark mb-4">Company</h5>
                <ul className="list-unstyled">
                    <li><a href="/about" className="text-white text-decoration-none">About us</a></li>
                    <li><a href="/policy" className="text-white text-decoration-none">Policy Privacy</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright text-center pb-3">© 2024 Copyright:
        <a href="https://mdbootstrap.com/" className="text-white text-decoration-none"> Gronmarket.com</a>
    </div>

</footer>

export default Footer