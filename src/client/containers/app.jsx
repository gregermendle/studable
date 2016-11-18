import React from 'react';

/*
  Components
*/
import { LogoContainer, LogoImage, LogoText } from '../components/logo';
import Header from '../components/header';

function AppContainer() {
  return (
    <div className="page-container">
      <Header>
        <LogoContainer>
          <LogoImage />
          <LogoText />
        </LogoContainer>
      </Header>
    </div>
  );
}

export default AppContainer;
