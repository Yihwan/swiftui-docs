import { useColorMode } from 'theme-ui'
import React from 'react';

import ImagePreview from '../imagePreview';
import {
  ContentBlockContainer,
  CodeContent,
} from './style';

const TabbedContentBlock = ({ imgName, children }) => {
  const [colorMode] = useColorMode();
  return (
    <ContentBlockContainer colorMode={colorMode}>
      <CodeContent>
        <ImagePreview colorMode={colorMode} imgName={imgName} />
        {children}
      </CodeContent>
    </ContentBlockContainer>
  );
}

export default TabbedContentBlock;