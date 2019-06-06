import * as React from 'react';

const Billboard: React.SFC = ({ children }) => (
  <div className="billboard">
    <div className="billboard-inner">{children}</div>
  </div>
);

export default Billboard;
