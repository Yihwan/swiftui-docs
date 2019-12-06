import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Image from './image';

import { 
  ContentBlockContainer,
  InfoContainer,
  ImageContainer
} from './style';

const ContentBlock = ({ imgName, children }) => {
  console.log(children);
  return(
    <ContentBlockContainer>
      <InfoContainer>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>Code</Tab>
            <Tab>API</Tab>
          </TabList>
          <TabPanel>{children.filter(({ props }) => props.originalType === 'code')}</TabPanel>
          <TabPanel>{children.filter(({ props }) => props.originalType === 'table')}</TabPanel>
        </Tabs>
      </InfoContainer>
      <ImageContainer>
        <Image imgName={imgName}/>
      </ImageContainer>
    </ContentBlockContainer>
  );
}

export default ContentBlock;