import React from 'react';
import { Link } from 'react-router';

function NavItem({ to, label }) {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
}

NavItem.propTypes = {
  to: React.PropTypes.string,
  label: React.PropTypes.string,
};

function Nav({ children, disabled }) {
  return (
    <ul className={`nav ${disabled ? 'disabled' : ''}`}>
      {children}
    </ul>
  );
}

Nav.propTypes = {
  children: React.PropTypes.node,
  disabled: React.PropTypes.bool,
};

export { Nav, NavItem };
