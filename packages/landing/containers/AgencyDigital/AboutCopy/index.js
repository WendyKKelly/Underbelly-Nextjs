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
} from './aboutcopy.style';

import paypal from 'common/src/assets/image/agencyDigital/paypal.png';
import google from 'common/src/assets/image/agencyDigital/google.png';
import dropbox from 'common/src/assets/image/agencyDigital/dropbox.png';

const AboutCopy = () => {
  return (
    <Section id="about">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="The Underbelly Project"
            />

            <Text
              className="banner-caption"
              content="When you think of the word underbelly, isn't it both the very soft vulnerable protected area that most of us are careful to keep safe? And isn't it also that seedy part of town where corrupt politicians meet ne'er do wells down by the docks at night to take care of the stuff that no one can ever know about? Well, combine those two things, related them to our lovely, lovely precious selves, and you have The Underbelly project. It's my attempt to help us gain emotional strength. On a practical level, The Underbelly Project is a collection of wild and precious tools that will help you get emotionally strong and healthy. Help you gain resilience, gain strength, gain flexibility so that when life inevitably throws you a curve ball, you can catch it and throw it back with style and ease. But philosophically, The Underbelly Project is about looking at your vulnerable self — the part you don't show anyone — and learn to love, have compassion for, and care for that part of yourself. Loving the beautiful, kind, sweet, successful you is easy enough. It's when things get messy, dirty, ugly, and torn that we need to dig in and love hard."
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

export default AboutCopy;
