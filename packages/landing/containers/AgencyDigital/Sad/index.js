import React from 'react';
import { Icon } from 'react-icons-kit';
import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight';
import { rgba } from 'polished';

import Container from 'common/src/components/UI/ContainerTwo';
import Image from 'common/src/components/Image';
import illustration from 'common/src/assets/image/agencyDigital/support_illustration.png';
import { data } from 'common/src/data/AgencyDigital';
import Section, {
  ContentWrapper,
  Content,
  HelpBlock,
  Illustration,
} from './sad.style';

const Sad = () => {
  return (
    <Section id="sad">
      <Container>
        <ContentWrapper>
          <Content>
            <h2>Are you feeling deeply sad or overwhelmed right now?</h2>
            <p>
              Take steps to look after yourself today. You'll look backon this moment and be so glad you started. It's never a bad day to begin to look after yourself. I want to encourage you to find a therapist, counselor or life coach who can guide you. Take advantage of the tools, here, but please, if you're not feeling great, take care of yourself by making some calls to find a trusted therapist to support you.
            </p>
            {data.helps.map(help => (
              <HelpBlock key={help.id}>
                <div className="icon">
                  <Image src={help.icon} alt={help.title} />
                </div>
                <div className="content">
                  <h4>
                    {help.title}{' '}
                    <Icon
                      icon={iosArrowThinRight}
                      size={30}
                      style={{ color: rgba('#0F2137', 0.3) }}
                    />
                  </h4>
                  <p>{help.desc}</p>
                </div>
              </HelpBlock>
            ))}
          </Content>
          <Illustration>
            <Image src={illustration} alt="" />
          </Illustration>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Sad;
