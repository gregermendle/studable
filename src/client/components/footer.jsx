import React from 'react';

function FooterItem({ children }) {
  return (
    <span>
      {children}
    </span>
  );
}

FooterItem.propTypes = {
  children: React.PropTypes.node,
};

function Footer({ children }) {
  return (
    <div className="page-footer">
      {children}
    </div>
  );
}

Footer.propTypes = {
  children: React.PropTypes.node,
};

export { Footer, FooterItem };
