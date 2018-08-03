import React from 'react';

function Header({ children }) {
  return (
    <div className="page-header">
      {children}
    </div>
  );
}

Header.propTypes = {
  children: React.PropTypes.node,
};

export default Header;
