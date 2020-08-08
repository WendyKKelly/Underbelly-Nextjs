import React from 'react';
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
            <Heading
              as="h1"
              content="You, unfurled."
            />

            <Text
              className="banner-caption"
              content="Your unique imprint — your Wild and Precious emotional self — deserves as much attention, needs as much care, hurts just as much as your physical self. It's time to take your emotional self as seriously as your physical self. Learn, train, and care for your emotional self — start now."
            />

            <Subscribe>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Subscribe" type="submit" />
            </Subscribe>


          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
