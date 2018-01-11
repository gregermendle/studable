import React from 'react';

/*
  Components
*/
import { LogoContainer, LogoImage, LogoText } from '../components/logo';
import { Nav, NavItem } from '../components/nav';
import { Footer, FooterItem } from '../components/footer';
import Billboard from '../components/billboard';
import Header from '../components/header';

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
          <NavItem label="Blog" />
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
