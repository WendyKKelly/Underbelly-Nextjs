import React from 'react';
import Fade from 'react-reveal/Fade';

import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/src/components/UI/ContainerTwo';
import Image from 'common/src/components/Image';
import Link from 'common/src/components/Link';
import {
  Section,
  FooterTop,
  FooterWidget,
  FooterBottom,
  Copyright,
  FooterNav,
} from './footer.style';
import { data } from 'common/src/data/AgencyDigital';
import Logo from 'common/src/assets/image/agencyDigital/logo.png';

const Footer = () => {
  return (
    <Section>
      <Container>

        <FooterBottom>
          <Copyright>
            <Image src={Logo} alt="Agency Digital" />
            Copyright &copy; {new Date().getFullYear()}
          </Copyright>
          <FooterNav>
            {data.footerNav.map(item => (
              <li key={item.id}><Link href={item.link} className="">{item.title} <Icon icon={chevronRight}/>
              </Link> </li>
            ))}



          </FooterNav>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
