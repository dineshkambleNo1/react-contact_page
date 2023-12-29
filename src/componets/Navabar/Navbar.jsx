import styles from "./Navbar.module.css";

function Navbar() {
 // console.log(styles);
  return (
    <nav className={`${styles.navbar} container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="Logo" />
      </div>

      <ul>
        <li>MENU</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
