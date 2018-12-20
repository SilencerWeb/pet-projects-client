import * as React from 'react';
import styled from 'styled-components';

import { Container } from 'ui/atoms';
import { ProjectCard } from 'ui/molecules';
import { Email, Twitter, Telegram } from 'ui/outlines';
import { color } from 'ui/theme';

import { rgba } from 'utils';

import programmerIllustration from 'assets/programmer-illustration.svg';


const Title = styled.h1`
  max-width: 540px;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  margin-right: 20px;
  margin-bottom: 0;
  
  span {
    color: ${color.primary}
  }
`;

const Illustration = styled.img`
  max-width: 100%;
`;

const Intro = styled.div`

  ${Container} {
    display: flex;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 200px;
  }
`;

const ProjectsList = styled.div`
  margin-bottom: 200px;

  ${Container} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const FooterSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  a {
    margin-right: 20px;
    
    &:hover {
      
      svg {
        fill: ${rgba(color.secondary, 0.8)};
      }
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
  
  svg {
    width: 40px;
    height: 40px;
    fill: ${color.secondary};
    transition: 0.2s;
  }
`;

const Footer = styled.div`
  padding-bottom: 100px;
  
  ${Title} {
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`

`;


export const MainPage = (props) => {
  const projects = [
    {
      name: 'Upcoming Movies',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      difficulty: 'easy',
    },
    {
      name: 'Watchlist',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      difficulty: 'easy',
    },
    {
      name: 'Pomodoro Timer',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      difficulty: 'hard',
    },
    {
      name: 'Upcoming Movies 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      difficulty: 'medium',
    },
    {
      name: 'Watchlist 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      difficulty: 'medium',
    },
    {
      name: 'Pomodoro Timer 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      difficulty: 'hard',
    },
  ];

  return (
    <Wrapper className={ props.className }>
      <Intro>
        <Container>
          <Title>
            <span>Pet Projects</span> is a place where you can find a project for practicing your development skills
          </Title>

          <Illustration src={ programmerIllustration } alt={ '' }/>
        </Container>
      </Intro>

      <ProjectsList>
        <Container>
          {
            projects.map((project) => (
              <ProjectCard
                name={ project.name }
                description={ project.description }
                difficulty={ project.difficulty }
                key={ project.name }
              />
            ))
          }
        </Container>
      </ProjectsList>

      <Footer>
        <Container>
          <Title as={ 'h2' }>Want to share a pet project idea?</Title>
          <FooterSocialLinks>
            <a href={ 'mailto:silencer.web@gmail.com?subject=Pet Project Idea' }><Email/></a>
            <a href={ 'https://twitter.com/messages/compose?screen_name=silencerweb' } target={ '_blank' }><Twitter/></a>
            <a href={ 'tg://resolve?domain=thisbabeisactuallynaked' }><Telegram/></a>
          </FooterSocialLinks>
        </Container>
      </Footer>
    </Wrapper>
  );
};
