import { FaFacebook, FaInstagram, FaYoutube, FaMessage} from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa"


const Footer = () => {
    return ( 
        <footer>
            <section>
                <div>
                    <div>
                        <p><b>About</b></p>
                        <ul>
                            <li>Chicago</li>
                            <li>100-01</li>
                            <li>245 Madison Avenue, Suite 1200</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Contact</b></p>
                        <ul>
                            <li><FaPhoneSquare /> +1 212-555-0184</li>
                            <li><FaPhoneSquare /> +1 212-555-0199</li>
                            <li><FaMessage /> Little.Lemon@mail.com</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Socials</b></p>
                        <ul>
                            <li><a href="#" target="_blanc"><FaInstagram/> Insta</a></li>
                            <li><a href="#" target="_blanc"><FaFacebook/> Facebook</a></li>
                            <li><a href="#" target="_blanc"><FaYoutube/> Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;