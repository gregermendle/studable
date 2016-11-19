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
  return (
    <div className="page-container">
      <div className="content-spacer">
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
      </div>
      <Footer>
        <FooterItem>&copy; 2016 St&uuml;dable</FooterItem>
        <FooterItem>
          Made with <i className="fa fa-magic" /> by St&uuml;dable.
        </FooterItem>
      </Footer>
    </div>
  );
}

export default AppContainer;
