import React from 'react';
import Iframe from 'react-iframe';
import Link from 'common/src/components/Link';
import Text from 'common/src/components/Text';
import Input from 'common/src/components/Input';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from 'common/src/assets/image/agencyDigital/paypal.png';
import google from 'common/src/assets/image/agencyDigital/google.png';
import dropbox from 'common/src/assets/image/agencyDigital/dropbox.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="You, 100%." />

            <Text
              className="banner-caption"
              content="The Underbelly mission is to get us all loving ourselves 100%. Love your body. Love your mind. Love your emotional self. Love all of you — even the so-called 'unloveable bits' Start by subscribing to a free Monday morning newsletter with 10 'wild and precious' things to put you on the right track to an emotionally strong week ahead."
            />

            <Subscribe className="substack">
              <Iframe
                className="substack"
                src="https://underbelly.substack.com/embed"
                width="580px"
                height="220"
                frameborder="0"
                scrolling="no"
              />
            </Subscribe>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
