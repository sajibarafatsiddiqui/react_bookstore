import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navlinks = [
    { path: '/', text: 'Books' },
    { path: '/categories', text: 'Categories' },
  ];
  return (
    <ul>
      {navlinks.map((navlink) => (
        <li key={navlink.text} className="item">
          <NavLink to={navlink.path}>{navlink.text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
