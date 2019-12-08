import React, { useState } from 'react';

import ImagePreview from './imagePreview';
import { 
  ContentBlockContainer,
  Header,
  TabButtonGroup,
  Content,
} from './style';

const ContentBlock = ({ imgName, children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const classtype = tabIndex === 0 ? 'code' : 'table';

  return(
    <ContentBlockContainer>
      <Header>
        <TabButtonGroup>
          <button onClick={() => setTabIndex(0)}>Code</button>
          <button onClick={() => setTabIndex(1)}>API</button>
        </TabButtonGroup>
      
      </Header>

      <Content>
        {classtype === 'code' && <ImagePreview imgName={imgName} />}
        {children.filter(({ props }) => props.originalType === classtype)}
      </Content>
    </ContentBlockContainer>
  );
}

export default ContentBlock;