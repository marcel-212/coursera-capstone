import { FaFacebook, FaInstagram, FaYoutube, FaMessage } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer role="contentinfo">
            <section aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                    Footer information
                </h2>
                <div>
                    <div>
                        <p><b>About</b></p>
                        <ul>
                            <li>Chicago</li>
                            <li>100-01</li>
                            <li>
                                <address>
                                    245 Madison Avenue, Suite 1200
                                </address>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Contact</b></p>
                        <ul>
                            <li>
                                <FaPhoneSquare aria-hidden="true" />
                                <a href="tel:+12125550184">
                                    <span className="sr-only">Call </span>
                                    +1 212-555-0184
                                </a>
                            </li>
                            <li>
                                <FaPhoneSquare aria-hidden="true" />
                                <a href="tel:+12125550199">
                                    <span className="sr-only">Call </span>
                                    +1 212-555-0199
                                </a>
                            </li>
                            <li>
                                <FaMessage aria-hidden="true" />
                                <a href="mailto:Little.Lemon@mail.com">
                                    Little.Lemon@mail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Socials</b></p>
                        <ul>
                            <li>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Instagram (opens in a new tab)"
                                >
                                    <FaInstagram aria-hidden="true" /> Insta
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Facebook (opens in a new tab)"
                                >
                                    <FaFacebook aria-hidden="true" /> Facebook
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Visit our YouTube channel (opens in a new tab)"
                                >
                                    <FaYoutube aria-hidden="true" /> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
