import React from 'react';

function Billboard({ children }) {
  return (
    <div className="billboard">
      <div className="billboard-inner">
        {children}
      </div>
    </div>
  );
}

Billboard.propTypes = {
  children: React.PropTypes.node,
};

export default Billboard;
