import React from 'react';

function LogoImage() {
  return (
    <img src="/assets/logo-eyes-circle.png" className="logo" alt="ST&Uuml;DABLE" />
  );
}

function LogoText() {
  return (
    <span className="logo-text">
      ST&Uuml;DABLE
    </span>
  );
}

function LogoContainer({ children }) {
  return (
    <div className="logo-container">
      {children}
    </div>
  );
}

LogoContainer.propTypes = {
  children: React.PropTypes.node,
};

export { LogoImage, LogoText, LogoContainer };
