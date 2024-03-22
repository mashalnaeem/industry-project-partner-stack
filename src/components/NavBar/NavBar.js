import logo from "../../assets/industry-project-logo.svg"
import icon from "../../assets/search-24px.svg"


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <img className="navbar__logo" src={logo} alt="Logo" />
            </div>
            <div className="navbar__menu">
                <a href="#about">About Us</a>
                <button className="navbar__search">
                    <img className="navbar__icon" src={icon} alt="search-icon" /> 
                </button>
                <button className="navbar__button">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;