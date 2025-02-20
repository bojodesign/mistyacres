import { Container } from 'react-bootstrap';
import { SiteVariables } from '../App';

function Footer() {
	// Get Current Year
	const CurrentYear = () => <>{new Date().getFullYear()}</>;

	// Render Footer
	return (
		<footer className="footer pt-4 text-center">
			<Container>
				<div className="d-flex justify-content-center">
					<p className="address mb-0">
						{SiteVariables.footerAddress}
					</p>
				</div>
				<div className="copyright py-4">
					<small>&copy;<CurrentYear /> {SiteVariables.footerCopyright}</small>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;