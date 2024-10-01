import { NavLink } from 'react-router-dom';
import logo from '../assets/NST-logo.png'; 
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import useAuth from './useAuth';
function Header() {
  const isAdmin = useAuth();
  const handleLogout = () => {
     
    localStorage.removeItem('token'); 
    
     window.location.reload();
  };
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Page d'accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/our-services" 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Nos Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              À propos de nous
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/our-team" 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Notre équipe
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="login-icon-container">
        {isAdmin ? (
          <FaSignOutAlt 
          onClick={handleLogout} 
          className="logout-icon" 
          aria-label="Logout"
        />
        ) : (
          <NavLink 
            to="/login" 
            className="login-icon">
            <FaUser />
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
