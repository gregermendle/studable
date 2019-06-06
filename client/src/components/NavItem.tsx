import * as React from 'react';

import { Link } from 'react-router-dom';

interface INavItemProps {
  to?: string;
  label: React.ReactNode;
}

const NavItem: React.SFC<INavItemProps> = ({ to, label }) => (
  <li>
    <Link to={to}>{label}</Link>
  </li>
);

export default NavItem;
