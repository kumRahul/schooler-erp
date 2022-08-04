import "./SocialIcons.css";

function SocialIcons() {
  return (
    <header>
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <a
            className="nav-link pe-2"
            href="https://www.facebook.com/mdbootstrap"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f social__logo"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link pe-2"
            href="https://www.facebook.com/mdbootstrap"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube social__logo"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default SocialIcons;
