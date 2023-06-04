import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { SiteVariables } from '../App';

function Header() {
	// Render Header
	return (
		<header className="masthead bg-green text-secondary text-center" id="home">
			<Container className="d-flex align-items-center flex-column">
				<h1 className="masthead-heading text-uppercase mt-0 mb-0">{SiteVariables.title}<br />{SiteVariables.subtitle}</h1>
				<div className="divider-custom">
					<div className="divider-custom-line"></div>
					<div className="divider-custom-icon">
						<FontAwesomeIcon icon="fa-seedling" />
					</div>
					<div className="divider-custom-line"></div>
				</div>
				<p className="masthead-subheading font-weight-light mb-0">{SiteVariables.tagline}</p>
			</Container>
		</header>
	);
}

export default Header;