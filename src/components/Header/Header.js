import './Header.css'

import logo from '../../assets/images/logo.png'

import NavItem, {NavItemDropDown} from '../NavItem/NavItem'
const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark ">
        <div className="container">
            <a href="#top" className="navbar-brand">
              <img src={logo} alt = ""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                    <a href="#hero" className="nav-link">Home</a>
                    </NavItem>
                   
                    <NavItem>
                    <a href="#features" className="nav-link">Browse</a>
                    </NavItem>
                    
                    <NavItemDropDown>
                        <a href="#top" calssName = "nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" calssName="dropdown-item">Fortnite</a></li>
                            <li><a href="#next" calssName="dropdown-item">Call of Duty</a></li>
                        </ul>
                    </NavItemDropDown>

                    <NavItem>
                    <a href="#faq" className="nav-link">Streams</a>
                    </NavItem>
                   <NavItem>
                   <a href="./index-ar.html" className="nav-link">Profile</a>
                   </NavItem>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header