import * as React from 'react';

import LogoText from '../components/LogoText';
import LogoContainer from '../components/LogoContainer';
import LogoImage from '../components/LogoImage';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import Footer from '../components/Footer';
import FooterItem from '../components/FooterItem';
import Billboard from '../components/Billboard';
import Header from '../components/Header';

const AppContainer: React.SFC = () => {
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
      <Billboard>WE&rsquo;RE BUILDING THINGS!</Billboard>
      <Footer>
        <FooterItem>&copy; {currentYear} St&uuml;dable</FooterItem>
        <FooterItem>
          Made with <i className="fa fa-magic" /> by St&uuml;dable.
        </FooterItem>
      </Footer>
    </div>
  );
};

export default AppContainer;
