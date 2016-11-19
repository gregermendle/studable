import React from 'react';

function Billboard({ children }) {
  return (
    <div className="billboard">
      {children}
    </div>
  );
}

Billboard.propTypes = {
  children: React.PropTypes.node,
};

export default Billboard;
