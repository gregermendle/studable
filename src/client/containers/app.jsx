import React from 'react';

/*
  Components
*/
import { LogoContainer, LogoImage, LogoText } from '../components/Logo';
import { Nav, NavItem } from '../components/Nav';
import { Footer, FooterItem } from '../components/Footer';
import Billboard from '../components/Billboard';
import Header from '../components/Header';

function AppContainer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-container">
      <Header>
        <LogoContainer>
          <LogoImage />
          <LogoText />
        </LogoContainer>
        <Nav disabled>
          <NavItem label="About" />
          <NavItem label="Portfolio" />
          <NavItem label="Contact" />
        </Nav>
      </Header>
      <Billboard>
        WE&rsquo;RE BUILDING THINGS!
      </Billboard>
      <Footer>
        <FooterItem>&copy; {currentYear} St&uuml;dable</FooterItem>
        <FooterItem>
          Made with <i className="fa fa-magic" /> by St&uuml;dable.
        </FooterItem>
      </Footer>
    </div>
  );
}

export default AppContainer;
