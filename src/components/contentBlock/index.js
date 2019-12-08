import { useColorMode } from 'theme-ui'
import React from 'react';

import ImagePreview from '../imagePreview';
import {
  ContentBlockContainer,
  CodeContent,
} from './style';

const TabbedContentBlock = ({ imgName, children }) => {
  const [colorMode] = useColorMode();
  if (colorMode === 'dark') {
    const split = imgName.split('.png');
    imgName = split[0] + '-dark.png';
    console.log(imgName);
  }

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