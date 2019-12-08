import { useColorMode } from 'theme-ui'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ImagePreview from '../imagePreview';
import { 
  ContentBlockContainer,
  CodeContent,
} from './style';

const TabbedContentBlock = ({ imgName, children }) => {
  const [colorMode] = useColorMode();

  return(
    <ContentBlockContainer colorMode={colorMode}>
      <Tabs>
        <TabList>
          <Tab>Code</Tab>
          <Tab>Signature</Tab>
        </TabList>

        <TabPanel>
          <CodeContent>
            <ImagePreview colorMode={colorMode} imgName={imgName} />
            {children.filter(({ props }) => props.originalType === 'code')}
          </CodeContent>
        </TabPanel>
        <TabPanel>
          {children.filter(({ props }) => props.originalType === 'div')}
        </TabPanel>
      </Tabs>
    </ContentBlockContainer>
  );
}

export default TabbedContentBlock;

// <Header colorMode={colorMode}>
//   <TabButtonGroup>
//     <button onClick={() => setTabIndex(0)}>Code</button>
//     <button onClick={() => setTabIndex(1)}>API</button>
//   </TabButtonGroup>

// </Header>

//   <CodeContent>
//     {classtype === 'code' && <ImagePreview colorMode={colorMode} imgName={imgName} />}
//     {children.filter(({ props }) => props.originalType === classtype)}
//   </Content>