import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="footer-distributed">
			<div className="footer-left">
				<h3>Company<span>logo</span></h3>
				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					<a href="#">Servicios</a>
					<a href="#">Busquedas actuales</a>
					<a href="#">Quienes somos</a>
					<a href="#">Contact</a>
				</p>
				<p className="footer-company-name">RMWebs © 2024</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Test 1234</span> Buenos Aires, Argentina</p>
				</div>
				<div>
					<i className="fa fa-phone"></i>
					<p>+54 9 123456789</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">tesr@test.com</a></p>
				</div>
			</div>

			<div className="footer-right">
				<p className="footer-company-about">
					<span>Sobre la empresa</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
                
				<div className="footer-icons">
					<a href="#"><FaFacebookSquare className="icons"/></a>
					<a href="#"><FaSquareXTwitter className="icons"/></a>
					<a href="#"><FaLinkedin className="icons"/></a>
					<a href="#"><FaWhatsappSquare className="icons"/></a>
				</div>
			</div>
		</footer>
    )
}

export default Footer;