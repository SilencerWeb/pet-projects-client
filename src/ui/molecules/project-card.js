import * as React from 'react';
import styled, { css } from 'styled-components';

import { Brain } from 'ui/outlines';
import { color } from 'ui/theme';

import { rgba } from 'utils';


const Name = styled.h2`
  display: inline;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 0;
  margin-right: 10px;
  margin-bottom: 0;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: capitalize;
  border-radius: 4px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  margin-top: 2px;
  
  &:last-child {
    margin-right: 0;
  }
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  
  ${props => css`
    
    ${props.difficulty === 'hard' && css`
      color: #ff5959;
      background-color: ${rgba('#ff5959', 0.2)};
      
      svg {
        fill: #ff5959;
      }
    `}
    
    ${props.difficulty === 'medium' && css`
      color: #ff9b2b;
      background-color: ${rgba('#ff9b2b', 0.2)};
      
      svg {
        fill: #ff9b2b;
      }
    `}
    
    ${props.difficulty === 'easy' && css`
      color: #22c993;
      background-color: ${rgba('#22c993', 0.2)};
      
      svg {
        fill: #22c993;
      }
    `}
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: inline-block;
  vertical-align: top;
  min-width: 120px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: ${color.onPrimary};
  background-color: ${color.primary};
  border-radius: 4px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  margin-top: auto;
  margin-left: auto;
  transition: 0.2s;
  
  &:hover {
    background-color: ${rgba(color.primary, 0.8)};
  }
`;

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 370px;
  min-height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.08);
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-bottom: 25px;
`;


export const ProjectCard = (props) => {

  return (
    <Wrapper className={ props.className }>
      <Header>
        <Name>{ props.name }</Name>

        <Label difficulty={ props.difficulty }>
          <Brain/>
          <span>{ props.difficulty }</span>
        </Label>
      </Header>

      <Description>{ props.description }</Description>

      <Button href={ '' }>More</Button>
    </Wrapper>
  );
};
