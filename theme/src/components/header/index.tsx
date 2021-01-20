import React, {FunctionComponent} from "react";
import StyledModelViewer from "../modelviewer";
import StyledNavigation from "../navigation";
import {Description, StyledHeader, StyledTopics, Title, ColorTitle, SupportedBy, TitleWrapper, DownArrow, StyledCoverCredit} from "./style";
import reactStringReplace from 'react-string-replace';
import {MenuItem} from "../../utils/models";

interface HeaderProps {
  title: string;
  description: string;
  topics: string[];
  menu: MenuItem[];
  search: boolean;
}
const models = ['earth', 'robot', 'pizza']
const randomModel = models[0]
const Header: FunctionComponent<HeaderProps> = ({title, description, menu, topics = [], search = true}) => {
  if (topics.length > 0) {
    description = reactStringReplace(description, '%TOPICS%', (match, i) => {
      return (
        <StyledTopics
          strings={topics}
          typeSpeed={50}
          backSpeed={60}
          shuffle={false}
          backDelay={2000}
          loop={true}
          key={match + i}
        />
      );
    }) as any;
  }

  return (
    <StyledHeader>
      <StyledNavigation title={title} menu={menu} showSearch={search}/>
      <TitleWrapper>
        <Title>fues&nbsp;labs&nbsp;<ColorTitle>{title}</ColorTitle></Title>
        <Description>
          {description}.
        </Description>
        <SupportedBy>supported by</SupportedBy>
        <StyledModelViewer url={`https://cdn.fues.us/model/${randomModel}.glb`}/>
        <DownArrow><span>&darr;</span></DownArrow>
      </TitleWrapper>
    </StyledHeader>
  );
};

export default Header;
