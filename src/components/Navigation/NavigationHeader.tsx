import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BrentPng from '../../assets/Brent.png';
import BrentSvg from '../../assets/Brent.svg';

const NavigationHeader = ({history}) => {
  const [mobileToggle, setmobileToggle] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    history.push('/');
  }
  
  const toggleMobileMenu = (e) => {    
    setmobileToggle(!mobileToggle);
  }

  return (
    <>
    <nav>
          <ul className="main-nav">
            <li><Link to="/" className="logo" ><img src={BrentPng} alt="Logo"/></Link></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {
              localStorage.getItem('authToken') ?
                <li><button onClick={logoutUser} className="logout-btn"><i className="fa fa-sign-out"/></button></li>
                : null
            }
          </ul>
          <Link to="/admin" className="admin-corner"></Link>
      </nav>

      <a id="menu-toggle" href="#" className={`button ${mobileToggle ? "toggled" : ""}`} onClick={event => toggleMobileMenu(event)}>
          <span className="sr">Toggle Navigation</span>
          <span className="menu-bar bar1"></span>
          <span className="menu-bar bar2"></span>
          <span className="menu-bar bar3"></span>
      </a>

      <div className="mobile-menu" style={mobileToggle ? {display: 'block'} : { display: 'none'}}>
        <div>
            <Link to="/" onClick={event => toggleMobileMenu(event)}>
                <img src={BrentSvg} alt="Brent Logo" />
            </Link>
        </div>
        <ul>
            <li><Link to="/" onClick={event => toggleMobileMenu(event)}>Home</Link></li>
            <li><Link to="/skills" onClick={event=> toggleMobileMenu(event)}>Skills</Link></li>
            <li><Link to="/contact" onClick={event => toggleMobileMenu(event)}>Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default withRouter(NavigationHeader)
