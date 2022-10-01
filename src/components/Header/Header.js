import './Header.css'

import logo from '../../assets/images/logo.png'
const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark ">
        <div className="container">
            <a href="#" class="navbar-brand">
              <img src={logo} alt = ""/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#features" class="nav-link">Browse</a></li>
                    <li className="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul class="dropdown-menu">
                            <li><a href="#learn" calssName="dropdown-item">Fortnite</a></li>
                            <li><a href="#next" calssName="dropdown-item">Call of Duty</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="#faq" className="nav-link">Streams</a></li>
                    <li className="nav-item"><a href="./index-ar.html" className="nav-link">Profile</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header