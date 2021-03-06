import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Container} from "../common";

interface SubheaderProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

const StyledSubheader = styled.div<Pick<SubheaderProps, 'backgroundColor' | 'textColor'>>`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#000'};
  color: ${props => props.textColor ? props.textColor : '#f8fafe'};
  display: flex;
  align-items: center;
  height: 144px;
  margin-bottom: 30px;
`;

const SubheaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  line-height: 1em;
`;

const SubheaderSubtitle = styled.small`
  font-weight: normal;
  display: block;
  opacity: .9;
`;

const Subheader: FunctionComponent<SubheaderProps> = ({title, subtitle, backgroundColor, textColor}) => (
  <StyledSubheader backgroundColor={backgroundColor} textColor={textColor}>
    <Container>
      <SubheaderTitle>
        {title}
        <SubheaderSubtitle>{subtitle}</SubheaderSubtitle>
      </SubheaderTitle>
    </Container>
  </StyledSubheader>
);

export default Subheader;
