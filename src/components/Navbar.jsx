export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple"
          width="20"
        />
      </div>

      <ul className="nav-links">
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
      </ul>

      <div className="nav-icons">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-bag-shopping"></i>
      </div>
    </nav>
  );
}
