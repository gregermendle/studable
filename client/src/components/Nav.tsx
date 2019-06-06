import * as React from 'react';

interface INavProps {
  disabled: boolean;
}

const Nav: React.SFC<INavProps> = ({ children, disabled }) => (
  <ul className={`nav ${disabled ? 'disabled' : ''}`}>{children}</ul>
);

export default Nav;
