import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from '../styles/Navbar.module.css';
import Logo from './Logo';
import 'material-symbols';

const Navbar = () => {
  const navlinks = [
    { path: '/', text: 'Books' },
    { path: '/categories', text: 'Categories' },
  ];
  return (
    <nav className={styles.navbar_container}>
      <div className={cx(styles.navbar, styles.navbar)}>
        <div className={styles.navbar__content}>
          <Logo className={styles.navbar_title} />
          <ul className={styles.navbar__list}>
            {navlinks.map((navlink) => (
              <li key={navlink.text}>
                <NavLink to={navlink.path} style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>{navlink.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button type="button" className={styles.navbar__button}>
            <span className="material-symbols-outlined">
              person
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
